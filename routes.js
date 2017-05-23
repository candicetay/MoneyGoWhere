Router.configure({
	layoutTemplate: "main_layout"
});

Router.route("/", function() {
	this.render("navigation", {to:"nav"})
	this.render("start", {to: "content"})
});

Router.route("/allExpenses", function() {
	this.render("navigation", {to:"nav"})
	this.render("ExpenseTable", {to: "content"})
});

Router.route("/enterExpense", function() {
	this.render("navigation", {to:"nav"})
	this.render("FullEntry", {to: "content"})
});