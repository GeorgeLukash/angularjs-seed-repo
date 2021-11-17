angular.module('myApp', ['ngRoute', 'todoRost'])

  .constant('TPL_PATH', '/templates')

  .config(function ($routeProvider, TPL_PATH) {
    $routeProvider
      .when('/', {
        templateUrl: TPL_PATH + '/homePage.template.html'
      })
      .when('/login', {
        templateUrl: TPL_PATH + '/login.html'
      })
      .when('/home', {
        templateUrl: TPL_PATH + '/home.html'
      })
      .when('/rost', {
        templateUrl: TPL_PATH + '/rost-todo.html'
      })
  });