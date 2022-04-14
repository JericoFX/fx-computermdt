local Reports = {}
local Polices = {}

require("glm")
CreateThread(function()
	Wait(200)
	exports["qb-target"]:AddBoxZone("pc", vector3(442.26, -979.67, 30.69), 0.4, 1.6, { -- The name has to be unique, the coords a vector3 as shown, the 1.5 is the length of the boxzone and the 1.6 is the width of the boxzone, the length and width have to be float values
		name = "pc", -- This is the name of the zone recognized by PolyZone, this has to be unique so it doesn't mess up with other zones
		heading = 359, -- The heading of the boxzone, this has to be a float value
		debugPoly = false, -- This is for enabling/disabling the drawing of the box, it accepts only a boolean value (true or false), when true it will draw the polyzone in green
		minZ = 30.40,
		maxZ = 30.89, -- This is the top of the boxzone, this can be different from the Z value in the coords, this has to be a float value
	}, {
		options = { -- This is your options table, in this table all the options will be specified for the target to accept
			{ -- This is the first table with options, you can make as many options inside the options table as you want
				type = "client", -- This specifies the type of event the target has to trigger on click, this can be "client", "server", "command" or "qbcommand", this is OPTIONAL and will only work if the event is also specified
				event = "fx-mdt:client:openTablet", -- This is the event it will trigger on click, this can be a client event, server event, command or qbcore registered command, NOTICE: Normal command can't have arguments passed through, QBCore registered ones can have arguments passed through
				icon = "fas fa-desktop", -- This is the icon that will display next to this trigger option
				label = "Open Computer", -- This is the label of this option which you would be able to click on to trigger everything, this has to be a string<i class="fa-solid fa-desktop"></i>
				targeticon = "fas fa-desktop", -- This is the icon of the target itself, the icon changes to this when it turns blue on this specific option, this is OPTIONAL
				item = false, -- This is the item it has to check for, this option will only show up if the player has this item, this is OPTIONAL
				action = false,
				canInteract = false,
				job = "police", -- This is the job, this option won't show up if the player doesn't have this job, this can also be done with multiple jobs and grades, if you want multiple jobs you always need a grade with it: job = {["police"] = 0, ["ambulance"] = 2},
				gang = false, -- This is the gang, this option won't show up if the player doesn't have this gang, this can also be done with multiple gangs and grades, if you want multiple gangs you always need a grade with it: gang = {["ballas"] = 0, ["thelostmc"] = 2},
				citizenid = false, -- This is the citizenid, this option won't show up if the player doesn't have this citizenid, this can also be done with multiple citizenid's, if you want multiple citizenid's there is a specific format to follow: citizenid = {["JFD98238"] = true, ["HJS29340"] = true},
			},
		},
		distance = 2.5, -- This is the distance for you to be at for the target to turn blue, this is in GTA units and has to be a float value
	})
end)

RegisterNetEvent("QBCore:Client:OnPlayerLoaded", function()
	local data = QBCore.Functions.GetPlayerData().job.name
	if not data == "police" then
		return
	end
	TriggerServerEvent("fx-mdt:server:UpdateReports")
end)

RegisterNetEvent("fx-mdt:client:UpdateReports", function(Reportes)
	Reports = {}
	Reports = Reportes
	SendData("updateReports", { reports = Reports })
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
	TriggerServerEvent("fx-mdt:server:UpdateReports")
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
		defaultLang = Config.DefaultLang
	})
	SetNuiFocus(true, true)
end)

RegisterCommand("mdt", function(source, args)
	TriggerServerEvent("fx-mdt:server:UpdateReports")
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
			defaultLang = Config.DefaultLang
		})
		SetNuiFocus(true, true)
	else
		QBCore.Functions.Notify("Not in a police vehicle", "error")
	end
end, false)
RegisterNetEvent("fx-mdt:client:setReport", function(data)
	local Coords = GetEntityCoords(PlayerPedId())
	local x, y, z in Coords
	local StreetHash = GetStreetNameAtCoord(x, y, z)
	local StreetName = GetStreetNameFromHashKey(StreetHash)
	local citizenid,charinfo in QBCore.Functions.GetPlayerData()
	local dialog = exports["qb-input"]:ShowInput({
		header = "menu",
		submitText = "Add Message",
		inputs = {
			{
				text = "Insert Message here", -- text you want to be displayed as a place holder
				name = "message", -- name of the input should be unique otherwise it might override
				type = "text", -- type of the input
				isRequired = true, -- Optional [accepted values: true | false] but will submit the form if no value is inputted
				-- default = "CID-1234", -- Default text option, this is optional
			},
		},
	})
if not dialog.message  then
QBCore.Functions.Notify("Need to put a message")
return
else
	TriggerServerEvent(
		"fx-mdt:server:newReportFromCommand",
		{
			streetName = StreetName,
			coords = Coords,
			name = charinfo.firstname ,
			lastname=charinfo.lastname,
			citizenid = citizenid,
			phone = charinfo.phone,
			message = dialog.message
		}
	)
QBCore.Functions.Notify("Report Sended")
end
	
end)

-- local NPC = nil
-- Citizen.CreateThread(function()
-- 	local model = GetHashKey("a_m_y_hasjew_01")
-- 	RequestModel(model)
-- 	while not HasModelLoaded(model) do
-- 		Citizen.Wait(0)
-- 	end
-- 	local locPed = CreatePed(4, model, vector4(-691.72, -1084.41, 13.96 - 1, 89.14), false, true)
-- 	NPC = locPed
-- 	PlaceObjectOnGroundProperly(locPed)
-- 	FreezeEntityPosition(locPed, true)
-- 	SetEntityInvincible(locPed, true)
-- 	SetBlockingOfNonTemporaryEvents(locPed, true)
-- 	SetEntityAsMissionEntity(locPed, false, true)
-- 	SetModelAsNoLongerNeeded(model)
-- 	Wait(100)
-- 	exports["qb-target"]:AddTargetEntity(locPed, {
-- 		options = {
-- 			{
-- 				type = "server",
-- 				event = "fx-apartment:server:CheckTicket",
-- 				icon = "fas fa-hands",
-- 				label = "Change Ticket",
-- 				item = "gold_ticket_app",
-- 			},
-- 		},
-- 		distance = 3,
-- 	})
-- end)

-- AddEventHandler("onResourceStop", function(name)
-- 	if name == GetCurrentResourceName() then
-- 		DeleteEntity(NPC)
-- 	end
-- end)
