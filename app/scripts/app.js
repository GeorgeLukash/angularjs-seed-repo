angular
  .module("myApp", ["ngRoute", "app.dailyTasks"])

  .constant("TPL_PATH", "/templates")

  .config(function ($routeProvider, TPL_PATH) {
    $routeProvider
      .when("/", {
        templateUrl: TPL_PATH + "/homePage.template.html",
      })
      .when("/login", {
        templateUrl: TPL_PATH + "/login.html",
      })
      .when("/home", {
        templateUrl: TPL_PATH + "/home.html",
      })
      .when("/todoOrel", {
        templateUrl: TPL_PATH + "/mainPageOrel.template.html",
      })
      .when("/motivationPhrases", {
        templateUrl: TPL_PATH + "/motivationPhrasesPageOrel.template.html",
      });
  });
