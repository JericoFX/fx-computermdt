local Translations = {
	computer = {
		open_computer = "Open Pc",
	},
	money = {
		pay_fines = "Pay Fines",
		pay_fine = "You paid the fine",
	},
	menu = {
		amount = "Amount",
		title = "Title",
		no_fines = "you don't have any fine active",
		report_add_message = "Add Message",
		report_title = "Add Report Message",
		report_inser_message = "Message goes here",
	},
	error = {
		no_in_vehicle = "Not in police vehicle",
		no_message = "You need to put a message",
	},
	report = {
		send = "Report Sended",
	},
}

Lang = Locale:new({
	phrases = Translations,
	warnOnMissing = true,
})
