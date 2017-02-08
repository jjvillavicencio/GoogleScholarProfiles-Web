// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute', 'restService']);

// configure our routes
myApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/urls/:ID', {
            templateUrl: 'pages/url.html',
            controller: 'urlsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .otherwise({redirectTo:'/'});
});
