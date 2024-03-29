local QBCore = exports["qb-core"]:GetCoreObject()
local CurrentReports = {}
local encode = json.encode
local decode = json.decode
local CC = QBCore.Functions.CreateCallback
local Reportes = {}
local CurrentInfo = {}
local HelpRequested = {}
local CT = CreateThread

local WEBHOOK_TYPE = {
    imgur = "",
    discord = ""
}
-----------------------------------------------
local function deepcompare(t1, t2, ignore_mt)
    local ty1 = type(t1)
    local ty2 = type(t2)
    if ty1 ~= ty2 then
        return false
    end
    -- non-table types can be directly compared
    if ty1 ~= "table" and ty2 ~= "table" then
        return t1 == t2
    end
    -- as well as tables which have the metamethod __eq
    local mt = getmetatable(t1)
    if not ignore_mt and mt and mt.__eq then
        return t1 == t2
    end
    for k1, v1 in pairs(t1) do
        local v2 = t2[k1]
        if v2 == nil or not deepcompare(v1, v2) then
            return false
        end
    end
    for k2, v2 in pairs(t2) do
        local v1 = t1[k2]
        if v1 == nil or not deepcompare(v1, v2) then
            return false
        end
    end
    return true
end

------------------------------------------------

function string.fromhex(str)
    return (str:gsub("..", function(cc)
        return string.char(tonumber(cc, 16))
    end))
end

function IsPolice(src)
    local s = src
    local Player = QBCore.Functions.GetPlayer(s)
    local Job = Player.PlayerData.job.name
    if Job == "police" then
        return true
    else
        return false
    end
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
    local Data = {}
    for _, Player in pairs(QBCore.Functions.GetQBPlayers()) do
        if Player.PlayerData.job.name == "police" then
            Data[#Data + 1] = {src = Player.PlayerData.source, name = Player.PlayerData.charinfo.firstname, lastname = Player.PlayerData.charinfo.lastname, citizenid = Player.PlayerData.citizenid, rank = Player.PlayerData.job.label}
        end
    end
    p:resolve(Data)
    return Citizen.Await(p)
end
-----------------------------------------------
-- THIS VARIABLE HANDLE A KEY = NAME OF THE FUNCTION AND A
local contain = {
    name = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type  FROM fx_reports WHERE name = ?", {data})
    end,
    localization = function(data)
        return MySQL.query.await(
            "SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE JSON_UNQUOTE(JSON_EXTRACT(fx_reports.localization,'$.location')) LIKE ?",
        {string.lower("%" .. data .. "%")})
    end,
    citizenid = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE citizenid = ?", {data})
    end,
    id = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE id LIKE ? ", {string.lower("%" .. data .. "%")})
    end,
    data = function(data)
        return MySQL.query.await(
            "SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE JSON_UNQUOTE(JSON_EXTRACT(fx_reports.`data`,'$.polices[*]')) LIKE ?",
        {string.lower("%" .. data .. "%")})
    end,
    all = function(data)
        return MySQL.query.await("SELECT id,title,name,lastname,citizenid,location,coords,observations,data,amount,type FROM fx_reports WHERE fx_reports.type = 'bolo' OR  fx_reports.type = 'warrant' OR  fx_reports.type = 'report' AND `date` > NOW() - INTERVAL 12 hour ")
    end,
    searchUser = function(data)
        local query =
        "SELECT JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname,players.citizenid AS citizenid,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.name')) AS jobname ,JSON_UNQUOTE(JSON_EXTRACT(players.job,'$.label')) AS rank FROM players where players.charinfo LIKE ?"
        return MySQL.query.await(query, {string.lower("%" .. data .. "%")})
    end,
    getVehicleInfo = function(types, data)
        local query = ""
        local ret = ""
        if types == "citizenid" then
            query =
            "SELECT JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.color1')) AS color,JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.plate')) AS plate,vehicle AS model,bolo AS bolo FROM player_vehicles WHERE citizenid = ?"
            ret = MySQL.query.await(query, {data})
        elseif types == "plate" then
            query =
            "SELECT players.citizenid,player_vehicles.bolo AS bolo, JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname,JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname, JSON_UNQUOTE(JSON_EXTRACT(player_vehicles.mods,'$.color1')) AS color, plate AS plate, player_vehicles.vehicle AS model FROM player_vehicles INNER JOIN players WHERE players.citizenid = player_vehicles.citizenid AND plate = ?"
            ret = MySQL.query.await(query, {data})[1]
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
    CT(function()
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
    end)
    p:resolve(vehInfo)
    return Citizen.Await(p)
end

CC("fx-mdt:server:searchForPlayer", function(source, cb, name, app, type)
    local src = source
    local Data = {}
    local Charinfo = contain["searchUser"](tostring(name))
    local Reports = {}
    if IsPolice(src) then
        if app == "search" then
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
                                data = decode(el.data),
                                location = el.location,
                                coords = el.coords,
                                observations = el.observations
                            }
                        end
                    end

                    Data[#Data + 1] = {
                        Name = el.firstname,
                        LastName = el.lastname,
                        CitizenID = el.citizenid,
                        Rank = el.rank,
                        JobName = el.jobname,
                        Vehicles = GetVehicleByData(el.citizenid),
                        Reports = Reports,
                        Bolo = 0
                    }
                end
            end
        elseif app == "report" and type == "name" then -- if the app is "report" we dont need the vehicle info or reports
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
        elseif app == "report" and type == "plate" then
            local Res = MySQL.query.await("SELECT JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.firstname')) AS firstname, JSON_UNQUOTE(JSON_EXTRACT(players.charinfo,'$.lastname')) AS lastname, players.citizenid AS citizenid FROM players INNER JOIN player_vehicles WHERE players.citizenid = player_vehicles.citizenid AND player_vehicles.plate = ?", {name})[1]

            Data[#Data + 1] = {
                Name = Res.firstname,
                LastName = Res.lastname,
                CitizenID = Res.citizenid,
            }

        end
        cb(Data)
    end
end)

CC("fx-mdt:server:GetEvidence", function(source, cb)
    local src = source
    if IsPolice(src) then

        local Blood = {}
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
    end
end)
CC("fx-mdt:server:getFines", function(source, cb, id)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if id == Player.PlayerData.citizenid then
        local result = MySQL.query.await("SELECT id,title,amount FROM fx_reports WHERE citizenid = ? AND amount > 0", {id})
        cb(result)
    end
end)
CC("fx-mdt:server:payFine", function(source, cb, amount, id)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    local PlayerCash = Player.PlayerData.money.cash > tonumber(amount)
    local PlayerBank = Player.PlayerData.money.bank > tonumber(amount)
    if Player.PlayerData.citizenid then
     if PlayerCash then
         Player.Functions.RemoveMoney("cash", amount, Lang:t("server.pay",{id=id}))
            exports["qb-management"]:AddMoney("police", amount)
            local result = MySQL.query.await("DELETE FROM fx_reports WHERE id = ?", {id})
            cb(true)
     elseif PlayerBank then
        Player.Functions.RemoveMoney("bank", amount, Lang:t("server.pay",{id=id}))
            exports["qb-management"]:AddMoney("police", amount)
            local result = MySQL.query.await("DELETE FROM fx_reports WHERE id = ?", {id})
            cb(true)
     else
        TriggerClientEvent("QBCore:Notify",source,Lang:t("server.no_money",{amount=amount}))
        cb(false)
     end
    end

end)

CC("fx-mdt:server:GetAllPolices", function(source, cb)
    -- ADD CHECK IF THE PLAYER IS A POLICE
    if IsPolice(source) then
        local polices = GetAllPolices()
        cb(polices)
    end
end)

CC("fx-mdt:server:setNewReport", function(source, cb, data)
    local coords = GetEntityCoords(GetPlayerPed(source))
    local data1 = GetAllPolices()
    CT(function()
        if data.report then
            if data.report.type == "basic" then
                TriggerEvent("qb-phone:server:sendNewMailToOffline", data.report.citizenid, {sender = "Police Depto", subject = Lang:t("server.fine_situation"), message = Lang:t("server.message",{amount= data.report.amount,id = data.report.id})})
            end
            Wait(100)
            local Res = MySQL.query.await(
                "INSERT INTO fx_reports (id,title,name,lastname,citizenid,plate,location,coords,observations,data,amount,type,isvehicle) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                {
                    tostring(data.report.id),
                    tostring(data.report.title),
                    tostring(data.report.name),
                    tostring(data.report.lastname),
                    tostring(data.report.citizenid),
                    data.report.plate,
                    data.report.location,
                    encode(coords),
                    tostring(data.report.observations),
                    encode(data.report.data),
                    data.report.amount,
                    data.report.type or "basic",
                    data.report.isvehicle and 1 or 0
                })
                
                if data.report.bolo and data.report.isvehicle then
                    MySQL.query("UPDATE player_vehicles SET bolo = 1 WHERE plate = ?", {tostring(data.report.plate)})
                end
                if Res.affectedRows > 0 and data.report.type ~= "basic" then
                    CurrentReports[#CurrentReports+1] = {data.report}
                    cb(true)
                    for i = 1, #data1 do
                        local el = data1[i]
                     
                        TriggerClientEvent("fx-mdt:client:SendNotify",el.src,data.report.type,data.report.observations,data.report.location) 
                    end
                    sendToPolicesOnly(data.report,"report")
                   
                elseif Res.affectedRows > 0 and data.report.type == "basic" then
                    cb(true)
                else
                    cb(false)
                end
        end
    end)
    end)
QBCore.Functions.CreateCallback("fx-mdt:server:GetAllMenuReports",function(source,cb)

    

end)



    CC("fx-mdt:server:getReportData", function(source, cb, data)
        local Data = {}
        local data1 = GetAllPolices()

        if contain[tostring(data.type)] then
            local DataReturn = contain[tostring(data.type)](data.value)
            for k, v in ipairs(DataReturn) do
                local el = DataReturn[k]
                Data[#Data + 1] = {
                    id = el.id,
                    name = el.name,
                    lastname = el.lastname,
                    citizenid = el.citizenid,
                    data = decode(el.data),
                    title = el.title,
                    location = el.location,
                    type = el.type,
                    taked = el.taked,
                    observations = el.observations,
                    callsign = el.callsign,
                    amount = el.amount,
                    images = decode(el.images)
                }
            end
            if tostring(data.type) == "all" then
                local DataReturn = contain["all"]("")
                for k, v in ipairs(DataReturn) do
                    local el = DataReturn[k]
                    Data[#Data + 1] = {
                        id = el.id,
                        name = el.name,
                        lastname = el.lastname,
                        citizenid = el.citizenid,
                        data = decode(el.data),
                        title = el.title,
                        location = el.location,
                        type = el.type,
                        observations = el.observations,
                        taked = el.taked,
                        callsign = el.callsign,
                        amount = el.amount,
                    }
                end
                sendToPolicesOnly(Data)
            end

            cb(Data)
        end
    end)

    CC("fx-mdt:server:deleteReport", function(source, cb, id)
        local data1 = GetAllPolices()

        if IsPolice(source) then
            if id.isvehicle and 1 then
                local Plate = MySQL.prepare.await("SELECT plate FROM fx_reports WHERE id = ?", {id.id})
                local UpdateVehicle = MySQL.query.await("UPDATE player_vehicles SET bolo = 0 WHERE plate = ?", {Plate})
            end
            local result = MySQL.query.await("DELETE FROM fx_reports WHERE id = ?", {id.id})
            local deleteassignament = MySQL.query.await("DELETE FROM fx_assignment WHERE caseid = ?", {id.id})

            cb(result.affectedRows > 0 and true or false)
                for i = 1, #data1 do
                    local el = data1[i]
                    TriggerClientEvent("fx-mdt:client:deleteReport",el.src,id.id)
                    TriggerClientEvent("QBCore:Notify",el.src,Lang:t("server.delete_report",{id = id.id}))
                end
        end
    end)

    CC("fx-mdt:server:getVehicleByPlate", function(source, cb, plate)
        local src = source
        local Data = {}
        if IsPolice(source) then
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
        end
    end)
    function sendToPolicesOnly(t,type)
        local ty = type and tostring(type) or "report"
        local data = GetAllPolices()
        local l = #data
        for i = 1, #data do
            local el = data[i]
            if ty == "all" then
                TriggerClientEvent("fx-mdt:client:UpdateAllReports", el.src, t)
            else
                TriggerClientEvent("fx-mdt:client:UpdateReports", el.src, t)
                TriggerClientEvent("fx-mdt:client:PlaySound",el.src)
                TriggerClientEvent("QBCore:Notify", el.src, Lang:t("server.new_report"),"primary","5000")
            end

        end
    end


    RegisterServerEvent("fx-mdt:server:UpdateAllReports", function()
        Wait(200)
        local r = MySQL.query.await("SELECT * FROM fx_reports WHERE fx_reports.type = 'bolo' OR  fx_reports.type = 'warrant' OR  fx_reports.type = 'report'")
        sendToPolicesOnly(r,"all")
    end)
    ----
    CC("fx-mdt:server:updateReport", function(source, cb, id, data)
        local src = source
        if IsPolice(src) then

            local data1 = GetAllPolices()
            MySQL.query("UPDATE fx_reports SET taked = 1, callsign = ? WHERE id = ?", {data.callsign, id.id}, function(res)

                    MySQL.insert("INSERT INTO fx_assignment (caseid, localization, coordinates, citizenid, name, callsign) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE caseid = ? ",
                    {id.id, id.location, id.coords, id.citizenid, id.name, data.callsign, id.id})
                    for i = 1, #data1 do
                        local el = data1[i]
                        TriggerClientEvent("QBCore:Notify", el.src, Lang:t("server.taked_report",{call = data.callsign,id = id.id}))

                        TriggerClientEvent("fx-mdt:client:updateCallReport",el.src,id.id,data.callsign)
                    end
                    cb(true)
            end)
            cb(true)
        end
    end)
    CC("fx-mdt:server:getMyCalls", function(source, cb, id)
        local src = source
        local send = {}
        if IsPolice(src) then
            local Data = GetMyCalls(id)
            cb(Data)
        end
        --add a check if is a police
    end)

    function GetMyCalls(id)
        local src = source
        local send = {}

        local p = promise.new()
        local Data = MySQL.query.await("SELECT caseid, localization, coordinates, citizenid, name, callsign FROM fx_assignment WHERE callsign = ?",{id})
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
        p:resolve(send)
        return Citizen.Await(p)
    end
    CC("fx-mdt:server:deleteCall", function(source, cb, id,callsign)
        local data1 = GetAllPolices()
        if IsPolice(source) then
            local Data = MySQL.query.await("DELETE FROM fx_assignment WHERE caseid = ?", {id})
            local Update = MySQL.query("UPDATE fx_reports SET taked = 0, callsign = 'none' WHERE id = ?", {id})
            for i = 1, #data1 do
                local el = data1[i]
                TriggerClientEvent("QBCore:Notify", el.src,Lang:t("server.un_report",{id = id,call = callsign}) )
                --
                TriggerClientEvent("fx-mdt:client:deleteCall",el.src,id)
            end
            cb(true)
        end
    end)

    RegisterServerEvent("fx-mdt:server:newReportFromCommand", function(data)
        local src = source
        local id = uuid()
        local Title = "Basic Report"
        local data1 = GetAllPolices()
        if type(data) == "table" then
           local streetName, coords, name, lastname, citizenid, phone, message in data
           for i = 1, #data1 do
            local el = data1[i]
            TriggerClientEvent("fx-mdt:client:SendNotify",el.src,"Report",message,streetName)
        end
           
           MySQL.query(
                "INSERT INTO fx_reports (id, title, name, lastname, citizenid, plate, location, coords, observations, data, amount, type,isvehicle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)",
                {
                    tostring(id),
                    tostring(Title),
                    tostring(name),
                    tostring(lastname),
                    tostring(citizenid),
                    "noPlate",
                    streetName,
                    encode(coords),
                    tostring(message),
                    encode({evidences = {}, polices = {}, fines = {},images = {}}),
                    0,
                    "report",
                    0
                })
                Wait(200)
                sendToPolicesOnly({title = Title,id = id,name = name,lastname = lastname,citizenid = citizenid,observations = message, data = {evidences = {}, polices = {}, fines = {}},type = "report",location = streetName,coords = coords,taked = 0,isvehicle = 0 },"report")
            end
        end)

        QBCore.Commands.Add("fxr", "Update a report", {name = "id", help = "ID of the report"}, false, function(source, args)
            local id = tostring(args[1])
            local rep = MySQL.query.await("UPDATE fx_reports SET callsign = '', taked = 0 WHERE id = ?", {id})
            local Res = MySQL.Sync.fetchSingle("SELECT EXISTS(SELECT 1 FROM fx_assignment WHERE caseid = ?) AS EX", {id})[1]
            if Res.EX == 1 then
                local Data = MySQL.query.await("DELETE FROM fx_assignment WHERE caseid = ?", {id})
            end
            TriggerEvent("fx-mdt:server:UpdateReports")
        end, "admin")

        CC("fx-mdt:server:getDataByPlate", function(source, cb, plate)
            local src < const > = source
            local Res = MySQL.Sync.fetchSingle("SELECT EXISTS(SELECT 1 FROM fx_reports WHERE plate = ?) AS EX", {plate})[1]
            if Res.EX == 1 then
                local Obs = MySQL.query.await("SELECT observations FROM fx_reports WHERE plate = ?", {plate})[1]
                cb(Obs)
            end
        end)

        RegisterNetEvent("fx-mdt:server:HelpRequested", function(data)
            local src < const > = source
           
            --https://overextended.github.io/docs/oxmysql/Usage/scalar
            local EX = MySQL.scalar.await("SELECT EXISTS(SELECT 1 FROM fx_helprequest WHERE callsign = ? AND code = ?) AS EX", {data.callsign, data.code})
            if EX == 0 then
                local Ins = MySQL.insert.await("INSERT INTO fx_helprequest (uid,code,street,coords,text,taked,callsign,takedby) VALUES (?,?,?,?,?,?,?,?)", {tostring(data.uid), data.code, data.street, encode(data.coords), data.text, 0, data.callsign, "none"})
            else
                TriggerClientEvent("QBCore:Notify", src, "You can´t create more ")
            end

            Wait(100)
            TriggerEvent("fx-mdt:server:SendHelpOnLogin")

        end)
        RegisterNetEvent("fx-mdt:server:SendHelpOnLogin", function()
            Wait(100)
            local p = promise.new()
            local Data = MySQL.query.await("SELECT uid,code,street,coords,text,taked,callsign,takedby FROM fx_helprequest")
            p:resolve(Data)
            TriggerClientEvent("fx-mdt:client:HelpRequested", -1, Citizen.Await(p))
        end)

        QBCore.Functions.CreateCallback("fx-mdt:takeHelp", function(source, cb, uid, callsign, type)

            if type == "delete" then
                local D = MySQL.query.await("DELETE FROM fx_helprequest WHERE uid = ?", {uid})
                cb({type = type, delete = D.affectedRows > 0 and true or false})
                TriggerEvent("fx-mdt:server:SendHelpOnLogin")
            elseif type == "help" then
                print(uid, callsign)
                local U = MySQL.query.await("UPDATE fx_helprequest SET taked = 1, takedby = :take WHERE uid = :uid", {take = callsign, uid = uid})
                cb({type = type, delete = false})
                TriggerEvent("fx-mdt:server:SendHelpOnLogin")
            end

            cb(false)
        end)


QBCore.Functions.CreateCallback("fx-mdt:client:getClosestPlayerInfo",function(source,cb,sid) 
    local src = source
    local serverID <const> = sid
    local Player = QBCore.Functions.GetPlayer(sid)
    if IsPolice(src) then
        cb({name = Player.PlayerData.charinfo.firstname,lastname = Player.PlayerData.charinfo.lastname,citizenid = Player.PlayerData.citizenid})
    end
end)

QBCore.Functions.CreateCallback("fx-mdt:server:getWebHook",function(source,cb,t)
if WEBHOOK_TYPE[t] ~= "" then
    cb(true,WEBHOOK_TYPE[t])
else
    TriggerClientEvent("QBCore:Notify",source,"NO WEBHOOK OR CLIENT ID DETECTED","error")
    cb(false)
    return
end
end)
function log(text)
    print(json.encode(text, { pretty = true, indent = "  ", align_keys = true }))
end
