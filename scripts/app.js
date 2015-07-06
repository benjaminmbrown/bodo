'use strict';

var model ={
  user: "Ben", 
 };

var app = angular.module('todoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

app.run(function($http){
  $http.get("store/todo.json").success(function(data){
    model.items=data;
  });
});

 app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo.html',
        controller: 'todoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
