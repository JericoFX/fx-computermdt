QBCore = exports["qb-core"]:GetCoreObject()
RegisterNUICallback(
    "getCurrentLocation",
    function(data, cb)
        local Coords = GetEntityCoords(PlayerPedId())
        -- stylua: ignore
        local x, y, z in Coords
        -- stylua: ignore
        local StreetHash = GetStreetNameAtCoord(x, y, z)
        local StreetName = GetStreetNameFromHashKey(StreetHash)
        cb(StreetName)
    end
)

RegisterNUICallback(
    "exitMDT",
    function(data, cb)
        SetNuiFocus(false, false)
        cb({})
    end
)
RegisterNUICallback(
    "searchPlayer",
    function(data, cb)
        local Name = tostring(data.name)
        local App = tostring(data.app)
        local type = tostring(data.type)
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:searchForPlayer",
            function(DataReturning)
                cb(DataReturning)
            end,
            Name,
            App,
            type
        )
    end
)

RegisterNUICallback(
    "getEvidence",
    function(data, cb)
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:GetEvidence",
            function(DataReturning)
                if DataReturning then
                    cb(DataReturning)
                end
            end
        )
    end
)
RegisterNUICallback(
    "sendNewReport",
    function(data, cb)
        local Info = data
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:setNewReport",
            function(isok)
                cb(isok)
            end,
            Info
        )
    end
)
RegisterNetEvent(
    "fx-mdt:client:PlaySound",
    function()
        PlaySound(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0, 0, 1)
    end
)
RegisterNUICallback(
    "getAllPolices",
    function(data, cb)
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:GetAllPolices",
            function(allPolices)
                cb(allPolices)
            end
        )
    end
)
RegisterNUICallback(
    "getReportData",
    function(data, cb)
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:getReportData",
            function(dat)
                cb(dat)
            end,
            data
        )
    end
)

RegisterNUICallback(
    "deleteReport",
    function(data, cb)
        local ID = data
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:deleteReport",
            function(bol)
                cb(bol)
            end,
            ID
        )
    end
)
RegisterNUICallback(
    "getReports",
    function(data, cb)
        TriggerServerEvent("fx-mdt:server:UpdateReports")
        cb({})
    end
)

RegisterNUICallback(
    "getVehicleByPlate",
    function(data, cb)
        local Plate = tostring(data.plate)
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:getVehicleByPlate",
            function(data)
                if data then
                    cb(data)
                end
            end,
            Plate
        )
    end
)

function addBlip(coords, text)
    local blips = {}
    if coords ~= nil and text ~= nil then
        local blip = AddBlipForCoord(coords.x, coords.y, coords.z)
        SetBlipSprite(blip, 535)
        SetBlipColour(blip, 1)
        SetBlipDisplay(blip, 4)
        SetBlipAlpha(blip, 250)
        SetBlipScale(blip, 0.8)
        SetBlipAsShortRange(blip, false)
        PulseBlip(blip)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString("CASE ID: " .. blip)
        EndTextCommandSetBlipName(blip)
        blips[#blips + 1] = {id = text, bid = blip}
    end
end
RegisterNUICallback(
    "updateReport",
    function(data, cb)
        local ID = data.caseinfo
        local Data = data.userData
        local coords
       if ID.coords == "string" then
        coords =  json.decode(ID.coords)
       else
        coords = ID.coords
       end
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:updateReport",
            function(cb1)
                addBlip(coords, ID.id)
                cb(cb1)
            end,
            ID,
            Data
        )
    end
)
RegisterNUICallback(
    "getMycalls",
    function(data, cb)
        local CID = data.cs
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:getMyCalls",
            function(cb1)
                cb(cb1)
            end,
            CID
        )
    end
)

RegisterNUICallback(
    "deleteAssignment",
    function(data, cb)
        local ID = data.id
        local Callsign = data.callsign
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:deleteCall",
            function(cb1)
                cb(cb1)
            end,
            ID,
            Callsign
        )
    end
)

RegisterNUICallback(
    "modifyCallsign",
    function(data, cb)
        -- check if you are a police
        local call = data.call
        TriggerServerEvent("QBCore:Server:SetMetaData", "callsign", tostring(call))
        cb(true)
    end
)

RegisterNUICallback(
    "changeDuty",
    function(data, cb)
        local datas = data.user
        local Duty = data.duty
        Duty = not Duty
        TriggerServerEvent("police:server:UpdateCurrentCops")
        TriggerServerEvent("QBCore:ToggleDuty")
        TriggerServerEvent("police:server:UpdateBlips")
        cb(Duty)
    end
)

RegisterNUICallback(
    "setDestination",
    function(data, cb)
        local coords = json.decode(data.coords)
        SetNewWaypoint(coords.x, coords.y)
        cb({})
    end
)

RegisterNUICallback(
    "getDataByPlate",
    function(data, cb)
        local Plate = data.plate
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:getDataByPlate",
            function(obs)
                cb(obs)
            end,
            Plate
        )
    end
)

RegisterNUICallback(
    "sendHelpRequest",
    function(data, cb)
        -- stylua: ignore
        local uid, code, text, callsign in data

        local Coords = GetEntityCoords(PlayerPedId())
        -- stylua: ignore
         local x, y, z in Coords
        local StreetHash = GetStreetNameAtCoord(x, y, z)
        local StreetName = GetStreetNameFromHashKey(StreetHash)

        TriggerServerEvent(
            "fx-mdt:server:HelpRequested",
            {uid = uid, callsign = callsign, coords = Coords, street = StreetName, code = code, text = text}
        )
        cb({})
    end
)

RegisterNetEvent(
    "fx-mdt:client:HelpRequested",
    function(data)
        SendNUIMessage(
            {
                action = "getHelpRequest",
                data = {
                    data = data
                }
            }
        )
    end
)

RegisterNUICallback(
    "takeHelp",
    function(data, cb)
        -- stylua: ignore
        local uid, callsign, type in data
        QBCore.Functions.TriggerCallback(
            "fx-mdt:takeHelp",
            function(dat)
                cb(dat)
            end,
            uid,
            callsign,
            type
        )
    end
)

RegisterNUICallback(
    "sendMessage",
    function(data, cb)
        local msg = data.message
        QBCore.Functions.Notify(tostring(msg))
        cb({})
    end
)

RegisterNUICallback(
    "getClosestPlayerData",
    function(data, cb)
        local Player = PlayerPedId()
        local Close = QBCore.Functions.GetClosestPlayer(GetEntityCoords(Player))
        local SID = GetPlayerServerId(Close)
        if Close then
            QBCore.Functions.TriggerCallback(
                "fx-mdt:client:getClosestPlayerInfo",
                function(pdata)
                    if pdata then
                        cb(pdata)
                    else
                        cb(false)
                    end
                end,
                SID
            )
        else
            QBCore.Functions.Notify("No Player close")
        end
    end
)

RegisterNUICallback(
    "requestScreenshot",
    function(data, cb)
        QBCore.Functions.TriggerCallback(
            "fx-mdt:server:getWebHook",
            function(has,CLIENT_ID)
                if has and CLIENT_ID then


                -- Code from qb-phone
                SetNuiFocus(false, false)
                CreateMobilePhone(1)
                CellCamActivate(true, true)
                takePhoto = true
                while takePhoto do
                    if IsControlJustPressed(1, 177) then -- CANCEL
                        DestroyMobilePhone()
                        CellCamActivate(false, false)
                        SetNuiFocus(true, true)
                        cb(nil)
                        takePhoto = false
                        break
                    elseif IsControlJustPressed(1, 176) then -- TAKE.. PIC
                        if Config.Type == "imgur" then
                            exports["screenshot-basic"]:requestScreenshotUpload(
                                "https://api.imgur.com/3/image",
                                "imgur",
                                {
                                    headers = {
                                        ["authorization"] = string.format("Client-ID %s", CLIENT_ID),
                                        ["content-type"] = "multipart/form-data"
                                    }
                                },
                                function(data)
                                    Wait(100)
                                    SetNuiFocus(true, true)

                                    local image = json.decode(data).data.link
                                    cb(image)
                                end
                            )
                            Wait(100)
                            DestroyMobilePhone()
                            CellCamActivate(false, false)
                            takePhoto = false
                    else
                        exports["screenshot-basic"]:requestScreenshotUpload(
                            tostring(CLIENT_ID),
                            "files[]",
                            function(data)
                                Wait(100)
                                local image = json.decode(data).attachments[1].proxy_url
                                SetNuiFocus(true, true)
                                cb(image)
                            end
                        )
                        Wait(100)
                        DestroyMobilePhone()
                        CellCamActivate(false, false)
                        takePhoto = false
                    end


                    end
                    HideHudComponentThisFrame(7)
                    HideHudComponentThisFrame(8)
                    HideHudComponentThisFrame(9)
                    HideHudComponentThisFrame(6)
                    HideHudComponentThisFrame(19)
                    HideHudAndRadarThisFrame()
                    EnableAllControlActions(0)
                    Wait(0)
                end
            else
                QBCore.Functions.Notify("No Webhook Detected","error")
                cb(nil)
            end
            end,Config.Type)
    end
)

RegisterCommand("dp",function()
    DestroyMobilePhone()
    CellCamActivate(false, false)
end)