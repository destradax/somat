angular
.module("app", [
	"templates",
	"ui.router",

	// Own modules
	"login"
])
.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");
});
