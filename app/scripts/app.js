angular.module('myApp', ['ngRoute', 'app.homePages', 'app.Calculate'])

  .constant('TPL_PATH', '/templates')

  .config(function($routeProvider, TPL_PATH) {
    $routeProvider.when('/',{
      controller : 'HomeCtrl',
      templateUrl : TPL_PATH + '/home.html'
    });

    $routeProvider.when('/calc', {
      controller : 'CalculationController',
      templateUrl : '/scripts/components/calculation' + '/calc.html'
    });
  });
