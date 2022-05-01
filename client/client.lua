local Reports = {}
local Polices = {}
CreateThread(function()
	Wait(200)
	for k, v in each(Config.AvaliablePC) do
		local el = Config.AvaliablePC[k]
		exports["qb-target"]:AddBoxZone(k .. "pc", el.position, el.length, el.width, {
			name = k .. "pc",
			heading = el.heading,
			debugPoly = false,
			minZ = el.minZ,
			maxZ = el.maxZ,
		}, {
			options = { --
				{
					type = "client",
					event = "fx-mdt:client:openTablet",
					icon = "fas fa-desktop",
					label = Lang:t("computer.open_computer"),
					targeticon = "fas fa-desktop",
					item = false,
					action = false,
					canInteract = false,
					job = "police",
					gang = false,
					citizenid = false,
				},
			},
			distance = 2.5,
		})
	end
	for k, v in each(Config.PayMenu) do
		local el = Config.PayMenu[k]
		exports["qb-target"]:AddBoxZone(k .. "menu", el.position, el.length, el.width, {
			name = k .. "menu",
			heading = el.heading,
			debugPoly = false,
			minZ = el.minZ,
			maxZ = el.maxZ,
		}, {
			options = {
				{
					type = "client",
					event = "fx-mdt:client:getFinesToPay",
					icon = "fas fa-money-bill",
					label = Lang:t("money.pay_fines"),
					targeticon = "fas fa-money-bill-1-wave",
					item = false,
					action = false,
					canInteract = false,
					job = "all",
					gang = false,
					citizenid = false,
				},
			},
			distance = 2.5,
		})
	end
end)

RegisterNetEvent("fx-client:payFine", function(data)
	local Amount = data.amount
	local ID = data.id
	QBCore.Functions.TriggerCallback("fx-mdt:server:payFine", function(haspay)
		if haspay then
			QBCore.Functions.Notify(Lang:t("money.pay_fine"))
		end
	end, Amount, ID)
end)

RegisterNetEvent("fx-mdt:client:getFinesToPay", function()
	local Menu = {}
	local Citizenid = QBCore.Functions.GetPlayerData().citizenid

	QBCore.Functions.TriggerCallback("fx-mdt:server:getFines", function(fines)
		if #fines > 0 then
			for k, v in pairs(fines) do
				local el = fines[k]
				Menu[#Menu + 1] = {
					header = el.title,
					txt = "ID " .. el.id .. " " .. Lang:t("menu.amount") .. " " .. el.amount and el.amount
						or 0 .. " " .. Lang:t("menu.title"),
					params = {
						event = "fx-client:payFine",
						args = {
							amount = el.amount,
							id = el.id,
						},
					},
				}
			end
			exports["qb-menu"]:openMenu(Menu)
		else
			QBCore.Functions.Notify(Lang:t("menu.no_fines"))
		end
	end, Citizenid)
end)

RegisterNetEvent("QBCore:Client:OnPlayerLoaded", function()
	local data = QBCore.Functions.GetPlayerData().job.name
	if not data == "police" then
		return
	end
	TriggerServerEvent("fx-mdt:server:SendHelpOnLogin")
	TriggerServerEvent("fx-mdt:server:UpdateAllReports")
end)
RegisterNetEvent("QBCore:Client:OnJobUpdate", function(job)
	if job.name == "police" then
		TriggerServerEvent("fx-mdt:server:SendHelpOnLogin")
		TriggerServerEvent("fx-mdt:server:UpdateAllReports")
	end
end)

RegisterNetEvent("fx-mdt:client:UpdateAllReports", function(Reportes)
	Reports = {}
	Reports = Reportes
	SendData("updateAllReports", { reports = Reports })
end)
function SendData(action, data)
	if action and type(data) == "table" then
		SendNUIMessage({
			action = action,
			data = data,
		})
	else
		Citizen.Trace("No Action Detected, or data is not a table")
	end
end

RegisterNetEvent("fx-mdt:client:openTablet", function()
	TriggerServerEvent("fx-mdt:server:SendHelpOnLogin")
	  local metadata,citizenid,charinfo,job in QBCore.Functions.GetPlayerData()
	SendData("openTablet", {
		isvisible = true,
		userdata = {
			callsign = metadata.callsign,
			name = charinfo.firstname .. " " .. charinfo.lastname,
			isboss = job.isboss,
			citizenid = citizenid,
		},
		type = "pc",
		langs = Config.LangAvaliable,
		onduty = job.onduty,
		defaultLang = Config.DefaultLang,
	})
	SetNuiFocus(true, true)
end)

RegisterCommand("mdt", function(source, args)

	local ped = PlayerPedId()
	local veh = GetEntityModel(GetVehiclePedIsIn(ped))
	  local metadata,citizenid,charinfo,job in QBCore.Functions.GetPlayerData()
	if Config.AllowedCars[veh] then
		SendData("openTablet", {
			isvisible = true,
			name = QBCore.Functions.GetPlayerData().firstname,
			userdata = {
				callsign = metadata.callsign,
				name = charinfo.firstname .. " " .. charinfo.lastname,
				isboss = job.isboss,
				citizenid = citizenid,
			},
			type = "car",
			onduty = job.onduty,
			langs = Config.LangAvaliable,
			defaultLang = Config.DefaultLang,
		})
		SetNuiFocus(true, true)
	else
		QBCore.Functions.Notify(Lang:t("error.no_in_vehicle"), "error")
	end
end, false)
RegisterNetEvent("fx-mdt:client:setReport", function()
	newReport()
end)
function newReport()
	local Coords = GetEntityCoords(PlayerPedId())
	local x,y,z in Coords
	local StreetHash = GetStreetNameAtCoord(x, y, z)
	local StreetName = GetStreetNameFromHashKey(StreetHash)
	local citizenid,charinfo in QBCore.Functions.GetPlayerData()
	local dialog = exports["qb-input"]:ShowInput({
		header = Lang:t("menu.report_title"),
		submitText = Lang:t("menu.report_add_message"),
		inputs = {
			{
				text = Lang:t("menu.report_inser_message"),
				name = "message",
				type = "text",
				isRequired = true,
			},
		},
	})
	if not dialog.message then
		QBCore.Functions.Notify(Lang:t("error.no_message"))
		return
	else
		TriggerServerEvent("fx-mdt:server:newReportFromCommand", {
			streetName = StreetName,
			coords = Coords,
			name = charinfo.firstname,
			lastname = charinfo.lastname,
			citizenid = citizenid,
			phone = charinfo.phone,
			message = dialog.message,
		})
		QBCore.Functions.Notify(Lang:t("report.send"))
	end
end

exports("newReport", newReport)

RegisterNetEvent("fx-mdt:client:sendUpdateCalls", function(calls)
	SendData("getMycalls", { calls = calls })
end)
RegisterNetEvent("fx-mdt:client:UpdateReports", function(data)
	SendData("updateReports", { reports = data })
end)
RegisterNetEvent("fx-mdt:client:updateCallReport", function(id, call)
	SendData("updateCallReport", { id = id, call = call })
end)
RegisterNetEvent("fx-mdt:client:deleteCall", function(id)
	SendData("deleteCall", { id = id })
end)

RegisterNetEvent("fx-mdt:client:deleteReport", function(id)
	SendData("delReport", { id = id })
end)
if Config.Debug then
	AddEventHandler("onResourceStart", function(resourceName)
		if GetCurrentResourceName() ~= resourceName then
			return
		end
		TriggerServerEvent("fx-mdt:server:UpdateAllReports")
	end)
end
