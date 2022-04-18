local Translations = {
	computer = {
		open_computer = "Abrir Pc",
	},
	money = {
		pay_fines = "Pagar Multas",
		pay_fine = "Pagaste la Multa",
	},
	menu = {
		amount = "Cantidad",
		title = "Titulo",
		no_fines = "No tienes multas activas",
		report_add_message = "Agregar Mensaje",
		report_title = "Agregar Reporte",
		report_inser_message = "Mensaje a enviar,
	},
	error = {
		no_in_vehicle = "No estas en un auto habilitado",
		no_message = "Necesitas colocar un mensaje",
	},
	report = {
		send = "Reporte enviado",
	},
}

Lang = Locale:new({
	phrases = Translations,
	warnOnMissing = true,
})
