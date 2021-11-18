angular.module('myApp', ['ngRoute', 'todos', 'auth', 'todoRost',"app.dailyTasks", 'vladTodo'])
  .constant("TPL_PATH", "/templates")

  .config(function($routeProvider, TPL_PATH) {
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
      .when('/rost', {
        templateUrl: TPL_PATH + '/rost-todo.html'
      })
      .when("/todoOrel", {
        templateUrl: TPL_PATH + "/mainPageOrel.template.html",
      })
      .when("/motivationPhrases", {
        templateUrl: TPL_PATH + "/motivationPhrasesPageOrel.template.html",
      })
      .when('/vlad',{
        templateUrl : TPL_PATH + '/vlad-home.html'
      })
  });
