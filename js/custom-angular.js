var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/swdc", {
        templateUrl : "swdc.html"
    });
    
});