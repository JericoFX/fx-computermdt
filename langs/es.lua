local Translations = {
	computer = {
		open_computer = "Open Pc",
	},
	money = {
		pay_fines = "Pagar Multas",
		pay_fine = "Pagaste la multa",
	},
	menu = {
		amount = "Cantidad",
		title = "Titulo",
		no_fines = "No tienes ninguna multa pendiente",
		report_add_message = "Añadir Mensaje",
		report_title = "Añadir Mensaje al Reporte",
		report_inser_message = "Escribe tu mensaje aca",
	},
	error = {
		no_in_vehicle = "No estas en un vehiculo habilitado",
		no_message = "Necesitas colocar un mensaje",
	},
	report = {
		send = "Reporte Enviado",
	},
	server = {
		new_report = "Nuevo reporte recibido",
		message = "Una multa fue puesta en su nombre, el monto es $%{amount} si necesitas mas informacion por favor ve a la estacion de policia mas cercana y brindales este codigo %{id} a los oficiales de policia.",
		fine_situation = "Fine situation",
		no_money = "No tienes suficiente dinero, necesitas: ${amount}",
		pay = "Pagaste la multa con la ID: {id} ",
		taked_report = "Unidad {call} tomo el reporte con la ID: {id}",
		un_report = "El reporte ID: {id} fue desasignado por {call}",
		delete_report = "El reporte ID: {id} fue borrado",
	},
}

Lang = Locale:new({
	phrases = Translations,
	warnOnMissing = true,
})
