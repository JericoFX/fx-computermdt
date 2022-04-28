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
	server = {
		new_report = "New Report Incoming",
		message = "A fine has been created the amount to pay is $%{amount} if you need more information, please go to the police station and give this code %{id} to the officers.",
		fine_situation = "Fine situation",
		no_money = "Not enought money, you need ${amount}",
		pay = "You paid the fine with the id {id} ",
		taked_report = "Unit {call} has taked the report with the ID: {id}",
		un_report = "The report ID: {id} was un-assigned by {call}",
		delete_report = "The report ID: {id} was deleted",
	},
}

Lang = Locale:new({
	phrases = Translations,
	warnOnMissing = true,
})
