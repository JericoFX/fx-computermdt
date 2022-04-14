QBCore = exports["qb-core"]:GetCoreObject()
RegisterNUICallback("getCurrentLocation", function(data, cb)
	local Coords = GetEntityCoords(PlayerPedId())
	local x, y, z in Coords
	local StreetHash = GetStreetNameAtCoord(x, y, z)
	local StreetName = GetStreetNameFromHashKey(StreetHash)
	cb(StreetName)
end)

RegisterNUICallback("exitMDT", function(data, cb)
	SetNuiFocus(false, false)
	cb({})
end)
RegisterNUICallback("searchPlayer", function(data, cb)
	local Name = tostring(data.name)
	local App = tostring(data.app)
	print(Name,App)
	QBCore.Functions.TriggerCallback("fx-mdt:server:searchForPlayer", function(DataReturning)
		cb(DataReturning)
	end, Name, App)
end)

RegisterNUICallback("getEvidence", function(data, cb)
	QBCore.Functions.TriggerCallback("fx-mdt:server:GetEvidence", function(DataReturning)
		if DataReturning then
			cb(DataReturning)
		end
	end)
end)
RegisterNUICallback("sendNewReport", function(data, cb)
	local Info = data


	QBCore.Functions.TriggerCallback("fx-mdt:server:setNewReport", function(isok)
		cb({ type = isok.type, reports = Reports })
		TriggerServerEvent("fx-mdt:server:UpdateReports")
	end, Info)
end)

RegisterNUICallback("getAllPolices", function(data, cb)
	QBCore.Functions.TriggerCallback("fx-mdt:server:GetAllPolices", function(allPolices)
		cb(allPolices)
	end)
end)
RegisterNUICallback("getReportData", function(data, cb)
	QBCore.Functions.TriggerCallback("fx-mdt:server:getReportData", function(dat)
		cb(dat)
	end, data)
end)

RegisterNUICallback("deleteReport", function(data, cb)
	local ID = data

	QBCore.Functions.TriggerCallback("fx-mdt:server:deleteReport", function(bol)
		cb(bol)
		TriggerServerEvent("fx-mdt:server:UpdateReports")
	end, ID)
end)
RegisterNUICallback("getReports", function(data, cb)
	TriggerServerEvent("fx-mdt:server:UpdateReports")
	cb({})
end)

RegisterNUICallback("getVehicleByPlate", function(data, cb)
	local Plate = tostring(data.plate)
	print(Plate)
	QBCore.Functions.TriggerCallback("fx-mdt:server:getVehicleByPlate", function(data)
		if data then
			cb(data)
		end
	end, Plate)
end)

function addBlip(coords,text,cb)
	local blips = {}

	local blip = AddBlipForCoord(coords.x, coords.y, coords.z)
	SetBlipSprite(blip, 535)
	SetBlipColour(blip, 1)
	SetBlipDisplay(blip, 4)
	SetBlipAlpha(blip, 250)
	SetBlipScale(blip, 0.8)
	SetBlipAsShortRange(blip, false)
	PulseBlip(blip)
	BeginTextCommandSetBlipName('STRING')
	AddTextComponentString("CASE ID: "..blip)
	EndTextCommandSetBlipName(blip)
	blips[#blips+1] = {id = blip}
	if coords == nil and text == nil then
			cb(blips)
	end
end
RegisterNUICallback("updateReport", function(data, cb)
	local ID = data.caseinfo
	local Data = data.userData
	local coords = json.decode(data.caseinfo.coords)
	QBCore.Debug(ID)
	QBCore.Functions.TriggerCallback("fx-mdt:server:updateReport", function(cb1)
	addBlip(coords,ID.id)
	QBCore.Functions.Notify("Coordinates marked in the map")
		cb(cb1)
	end, ID, Data)

end)
RegisterNUICallback("getMycalls", function(data, cb)
	local CID = data.cs
	QBCore.Functions.TriggerCallback("fx-mdt:server:getMyCalls", function(cb1)
		cb(cb1)
	end, CID)
end)

RegisterNUICallback("deleteAssignment", function(data, cb)
	local ID = data.id
	QBCore.Functions.TriggerCallback("fx-mdt:server:deleteCall", function(cb1)
		cb(cb1)
	end, ID)
end)

RegisterNUICallback("modifyCallsign", function(data,cb) 
	-- check if you are a police
	local call = data.call

	TriggerServerEvent("QBCore:Server:SetMetaData", "callsign", tostring(call))
	cb(true)
end)

RegisterNUICallback("changeDuty", function(data,cb) 
local datas = data.user
local Duty = data.duty
Duty = not Duty
	TriggerServerEvent("police:server:UpdateCurrentCops")
	TriggerServerEvent("QBCore:ToggleDuty")
	TriggerServerEvent("police:server:UpdateBlips")
cb(Duty)

end)

RegisterNUICallback("setDestination", function(data,cb) 
local coords = json.decode(data.coords)
SetNewWaypoint(coords.x, coords.y)


cb({})
end)

RegisterCommand("rfs",function(source,args) 
	TriggerServerEvent("QBCore:Server:SetMetaData", "callsign", "NO CALLSIGN")

end)
-- AddEventHandler("onResourceStop", function(name)
-- 	if name == GetCurrentResourceName() then
-- 	addBlip(nil,nil,function(cb) 
-- 		for k,v in each(cb) do
-- 			print(k,v)
-- 		end
	
-- 	end)
-- 	end
-- end)
