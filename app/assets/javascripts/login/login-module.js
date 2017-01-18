angular
.module("login", [])
.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider.state("login", {
		url: "/login",
		templateUrl: "login/_login.html",
		controller: "Login",
		controllerAs: "vm"
	});
});
