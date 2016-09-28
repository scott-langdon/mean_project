var app = angular.module('appName', ['ngRoute', 'ngFileUpload']);

app.config(function($routeProvider, $httpProvider){
    $httpProvider.interceptors.push(
        function($q, $location) {
        return {
            'responseError':function(rejection){
            if (rejection.status == 401){
                $location.url('/login');
            }
            return $q.reject(rejection);
        }
        };
    });
    $routeProvider
        .when('/', {
            templateUrl:'partials/login.html',
            controller:'usersController'
        })
        .when('/register', {
            templateUrl:'partials/register.html',
            controller:'usersController'
        })
        .when('/dashboard', {
            templateUrl:'partials/dashboard.html',
            controller: 'TopicsController'
        })
        .when('/topic/:id', {
            templateUrl:'partials/topic.html',
            controller: 'ShowController'
        })
        .when('/edit', {
            templateUrl:'partials/editUser.html',
            controller: 'editUsersController'
        })
        .otherwise({
            redirectTo:'/'
        })
})
