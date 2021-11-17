angular.module('myApp', ['ngRoute', 'todos', 'auth'])

  .constant('TPL_PATH', '/templates')

  .config(function ($routeProvider, TPL_PATH) {
    $routeProvider
      .when('/', {
        templateUrl: TPL_PATH + '/homePage.template.html'
      })
      .when('/login', {
        templateUrl: TPL_PATH + '/loginArtur.html'
      })
      .when('/home', {
        templateUrl: TPL_PATH + '/homeArtur.html'
      })
  });

