angular.module('myApp', ['ngRoute', 'todos', 'auth', 'app.homePages'])

  .constant('TPL_PATH', '/templates')

  .config(function ($routeProvider, TPL_PATH) {
    $routeProvider
      .when('/', {
        templateUrl: TPL_PATH + ''
      })
      .when('/login', {
        templateUrl: TPL_PATH + '/login.html'
      })
      .when('/home', {
        templateUrl: TPL_PATH + '/home.html'
      })
  });

