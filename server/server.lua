local QBCore = exports["qb-core"]:GetCoreObject()
-----------------------------------------------
function string.fromhex(str)
	return (str:gsub("..", function(cc)
		return string.char(tonumber(cc, 16))
	end))
end

local random = math.random
local function uuid()
	local template = "xyxyx"
	return string.gsub(template, "[xy]", function(c)
		local v = (c == "x") and random(0, 0xf) or random(8, 0xb)
		return string.format("%x", v)
	end)
end

function GetAllPolices()
	local p = promise.new()
	local PolicesAmount = MySQL.query.await(
		"SELECT citizenid,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS name,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname, JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.grade.name')) AS rank,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.name')) AS jobname, JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.onduty')) AS onduty FROM `players` WHERE `job` LIKE '%police%'"
	)
	p:resolve(PolicesAmount)
	return Citizen.Await(p)
end

-----------------------------------------------
-- THIS VARIABLE HANDLE A KEY = NAME OF THE FUNCTION AND A 
local contain = {
	name = function(data)
		return MySQL.query.await("SELECT * FROM fx_reports WHERE name = ?", { data })
	end,
	localization = function(data)
		return MySQL.query.await(
			"SELECT * FROM fx_reports WHERE JSON_UNQUOTE(JSON_EXTRACT(fx_reports.localization,'$.location')) LIKE ?",
			{ string.lower("%" .. data .. "%") }
		)
	end,
	citizenid = function(data)
		return MySQL.query.await("SELECT * FROM fx_reports WHERE citizenid = ?", { data })
	end,
	id = function(data)
		return MySQL.query.await("SELECT * FROM fx_reports WHERE id LIKE ? ", { string.lower("%" .. data .. "%") })
	end,
	data = function(data)
		return MySQL.query.await(
			"SELECT * FROM fx_reports WHERE JSON_UNQUOTE(JSON_EXTRACT(fx_reports.`data`,'$.polices[*]')) LIKE ?",
			{ string.lower("%" .. data .. "%") }
		)
	end,
	all = function(data)
		return MySQL.query.await("SELECT * FROM fx_reports")
	end,
	searchUser = function(data)
		local query =
			"SELECT JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname,players.citizenid AS citizenid,players.bolo AS bolo,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.name')) AS jobname ,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.label')) AS rank FROM players where players.charinfo LIKE ?"
		return MySQL.query.await(query, { string.lower("%" .. data .. "%") })
	end,
	getVehicleInfo = function(types, data)
		local query = ""
		local ret = ""
		if types == "citizenid" then
			query =
				"SELECT JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.color1')) AS color,JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.plate')) AS plate,vehicle AS model,bolo AS bolo FROM player_vehicles WHERE citizenid = ?"
			ret = MySQL.query.await(query, { data })
		elseif types == "plate" then
			query =
				"SELECT players.citizenid,player_vehicles.bolo AS bolo, JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname, JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.color1')) AS color, plate AS plate, player_vehicles.vehicle AS model FROM player_vehicles INNER JOIN players WHERE players.citizenid = player_vehicles.citizenid AND plate = ?"
			ret = MySQL.query.await(query, { data })[1]
		else
			Citizen.Trace("ERROR no valid argument passed")
			return
		end
		return ret
	end,
}

function GetVehicleByData(citizenid)
	print(citizenid)
	local veh = contain["getVehicleInfo"]("citizenid", citizenid)
	local p = promise.new()
	local vehInfo = {} -- DONT LIKE THIS, NEED TO MAKE IT BETTER
	for i = 1, #veh do
		local el = veh[i]
		vehInfo[#vehInfo + 1] = {
			name = QBCore.Shared.Vehicles[el.model].name,
			model = el.model,
			color = el.color,
			plate = el.plate,
			category = QBCore.Shared.Vehicles[el.model].category,
			bolo = el.bolo,
			citizenid = el.citizenid,
		}
	end
	QBCore.Debug(vehInfo)
	p:resolve(vehInfo)
	return Citizen.Await(p)
end

QBCore.Functions.CreateCallback("fx-mdt:server:searchForPlayer", function(source, cb, name, app)
	local Data = {}
	local Charinfo = contain["searchUser"](tostring(name))
	local Reports = {}
	if app == "search" then
		print("104")
		if Charinfo then
			for k, v in ipairs(Charinfo) do
				local el = Charinfo[k]
				if contain["citizenid"](el.citizenid) then
					for k, v in ipairs(contain["citizenid"](el.citizenid)) do
						local el = contain["citizenid"](el.citizenid)[k]
						Reports[#Reports + 1] = {
							title = el.title,
							name = el.name,
							id = el.id,
							data = json.decode(el.data),
							location = el.location,
							coords = el.coords,
						}
					end
				end
				print("121")
				Data[#Data + 1] = {
					Name = el.firstname,
					LastName = el.lastname,
					CitizenID = el.citizenid,
					Rank = el.rank,
					JobName = el.jobname,
					Vehicles = GetVehicleByData(el.citizenid),
					Reports = Reports,
					Bolo = el.bolo,
				}
			end
		end
	elseif app == "report" then -- if the app is "report" we dont need the vehicle info or reports
		if Charinfo then
			for k, v in ipairs(Charinfo) do
				local el = Charinfo[k]
				Data[#Data + 1] = {
					Name = el.firstname,
					LastName = el.lastname,
					CitizenID = el.citizenid,
				}
			end
		end
	end
	cb(Data)
end)

QBCore.Functions.CreateCallback("fx-mdt:server:GetEvidence", function(source, cb)
	local src = source
	-- if IsPolice(src) then

	local Blood = {}
	local Bullets = {}
	local Player = QBCore.Functions.GetPlayer(src)
	local Item = Player.Functions.GetItemsByName("filled_evidence_bag")
	if Item then
		for k, v in ipairs(Item) do
			local element = Item[k]
			if element.info.type == "blood" then
				--local spl = string.fromhex(element.info.dnalabel)
				Blood[#Blood + 1] = {
					id = uuid(),
					type = element.info.type,
					street = element.info.street,
					bloodtype = element.info.bloodtype,
					label = element.info.dnalabel,
				}
			else
				if element.info.type == "casing" then
					Blood[#Blood + 1] = {
						id = uuid(),
						type = element.info.type,
						street = element.info.street,
						ammotype = element.info.ammotype,
						label = element.info.ammolabel,
					}
				end
			end
		end
	end
	cb(Blood)
	-- end
end)

QBCore.Functions.CreateCallback("fx-mdt:server:GetAllPolices", function(source, cb)
	-- ADD CHECK IF THE PLAYER IS A POLICE
	local polices = GetAllPolices()
	SaveResourceFile(GetCurrentResourceName(), "data.json", json.encode(polices), -1)
	cb(polices)
end)

QBCore.Functions.CreateCallback("fx-mdt:server:setNewReport", function(source, cb, data)
	local coords = GetEntityCoords(GetPlayerPed(source))
	if data.report then
		if data.report.type == "basic" then
			TriggerEvent("qb-phone:server:sendNewMailToOffline",data.report.citizenid,{sender="Police Depto",subject =" Fine situation",message ="A fine has been created the amount to pay is $"..data.report.amount.." if you need more information, please go to the police station and give this code "..data.report.id.." to the officer."})
		end

		Wait(100)
		MySQL.query(
			"INSERT INTO fx_reports (id,title,name,lastname,citizenid,location,coords,observations,data,type) VALUES (?,?,?,?,?,?,?,?,?,?)",
			{
				tostring(data.report.id),
				tostring(data.report.title),
				tostring(data.report.name),
				tostring(data.report.lastname),
				tostring(data.report.citizenid),
				data.report.location,
				json.encode(coords),
				tostring(data.report.observations),
				json.encode(data.report.data),
				data.report.type or "basic",
			}
		)

		if data.report.bolo and data.report.isvehicle then
			MySQL.query("UPDATE player_vehicles SET bolo = 1 WHERE plate = ?", { tostring(data.report.plate) })
		end
		TriggerClientEvent("fx-mdt:client:UpdateReports", -1, contain["all"](""))
		cb({ type = true, reports = {} })
	end
end)

QBCore.Functions.CreateCallback("fx-mdt:server:getReportData", function(source, cb, data)
	local Data = {}

	if contain[tostring(data.type)] then
		local DataReturn = contain[tostring(data.type)](data.value)
		for k, v in ipairs(DataReturn) do
			local el = DataReturn[k]
			Data[#Data + 1] = {
				id = el.id,
				name = el.name,
				lastname = el.lastname,
				citizenid = el.citizenid,
				data = json.decode(el.data),
				title = el.title,
				location = el.localization,
			}
		end
		if tostring(data.type) == "all" then
			TriggerClientEvent("fx-mdt:client:UpdateReports", -1, contain["all"](""))
		end

		cb(Data)
	end
end)

QBCore.Functions.CreateCallback("fx-mdt:server:deleteReport", function(source, cb, id)
	local result = MySQL.query.await("DELETE FROM fx_reports WHERE id = ?", { id })
	cb(result.affectedRows > 0 and true or false)
	TriggerEvent("fx-mdt:server:UpdateReports")
end)

RegisterServerEvent("fx-apartment:server:CheckTicket", function()
	local src = source
	local Data = QBCore.Functions.GetPlayer(src)
	local item = Data.Functions.GetItemByName("gold_ticket_app")
	if not item then
		TriggerClientEvent("QBCore:Notify", source, "No Ticket")
		return
	end
	if not Data.PlayerData.citizenid == item.info.citizenid then
		TriggerClientEvent("QBCore:Notify", source, "This ticket isnt yours")
		return
	end
	TriggerClientEvent("fx-apartment:client:ChangeTicket", src, Data.PlayerData.citizenid)
end)

QBCore.Functions.CreateCallback("fx-mdt:server:getVehicleByPlate", function(source, cb, plate)
	local src = source
	local Data = {}
	-- Add check for police and if is in the tablet and in the same position
	if contain["getVehicleInfo"]("plate", plate) then
		local vi = contain["getVehicleInfo"]("plate", plate)
		Data = {
			name = vi.model,
			plate = vi.plate,
			color = vi.color,
			category = QBCore.Shared.Vehicles[vi.model].category,
			bolo = vi.bolo,
			citizenid = vi.citizenid,
			firstname = vi.firstname,
			lastname = vi.lastname,
		}
		cb(Data)
	end
end)

RegisterServerEvent("fx-mdt:server:UpdateReports", function()
	Wait(200)
	MySQL.query("SELECT * FROM fx_reports WHERE fx_reports.type = 'bolo' OR  fx_reports.type = 'warrant'", function(res)
		TriggerClientEvent("fx-mdt:client:UpdateReports", -1, res)
	end)
end)
----
QBCore.Functions.CreateCallback("fx-mdt:server:updateReport", function(source, cb, id, data)
	local src = source
--
	MySQL.query("UPDATE fx_reports SET taked = 1,callsign = ? WHERE id = ?", { data.callsign, id.id }, function(res)
		if res then
			MySQL.insert(
				"INSERT INTO fx_assignment (caseid,localization,coordinates,citizenid,name,callsign) VALUES (?,?,?,?,?,?) ON DUPLICATE KEY UPDATE caseid = ? ",
				{ id.id, id.location, id.coords, id.citizenid, id.name, data.callsign, id.id }
			)
			cb(true)
			TriggerEvent("fx-mdt:server:UpdateReports")
		end
	end)
	cb(false)
end)
QBCore.Functions.CreateCallback("fx-mdt:server:getMyCalls", function(source, cb, id)
	local src = source
	local send = {}
	local Data = MySQL.query.await(
		"SELECT caseid,localization,coordinates,citizenid,name,callsign FROM fx_assignment WHERE callsign = ?",
		{ id }
	)
	for k, v in each(Data) do
		local el = Data[k]
		send[#send + 1] = {
			casid = el.caseid,
			localization = el.localization,
			coordinates = el.coordinates,
			citizenid = el.citizenid,
			name = el.name,
			callsign = el.callsign,
		}
	end
	Wait(200)
	cb(send)
	--add a check if is a police
end)

QBCore.Functions.CreateCallback("fx-mdt:server:deleteCall", function(source, cb, id)
	local Data = MySQL.query.await("DELETE FROM fx_assignment  WHERE caseid = ?", { id })
	local Update = MySQL.query("UPDATE fx_reports SET taked = 0,callsign = '' WHERE id = ?", { id })

	TriggerEvent("fx-mdt:server:UpdateReports")
	cb(true)
end)

RegisterServerEvent("fx-mdt:server:newReportFromCommand", function(data)
	local src = source
	local id = uuid()
	local Title = "Basic Report"

	if type(data) == "table" then
			local streetName, coords,name,lastname,citizenid,phone,message in data
		local Data = { location = streetName, coords = coords }
		MySQL.query(
			"INSERT INTO fx_reports (id,title,name,lastname,citizenid,location,coords,observations,data,type) VALUES (?,?,?,?,?,?,?,?,?,?)",
			{
				tostring(id),
				tostring(Title),
				tostring(name),
				tostring(lastname),
				tostring(citizenid),
				Data.location,
				json.encode(Data.coords),
				tostring(message),
				json.encode({ evidences = {}, polices = {}, fines = {} }),
				"Civil",
			}
		)
		TriggerEvent("fx-mdt:server:UpdateReports")
	end
end)
