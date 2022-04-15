Config = Config or {}
--Make this way, nameOfTheCar = true
Config.AllowedCars = {
    [`police`] = true,
    [`police2`] = true,
    [`police3`] = true,
}
-- Add the languaje here, be sure to add the json on the nui/dist/locales, and please respect the name like this
-- [key] =  json name, es = es.json, en = en.json
-- Second argument here is the languaje name
Config.LangAvaliable = {
    {
        index = "es",
        lang = "Español"
    },
    {
        index = "en",
        lang = "English"
    }}
    Config.DefaultLang = "en"

   