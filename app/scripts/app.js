angular
  .module("myApp", ["ngRoute", "app.dailyTasks"])

  .constant("TPL_PATH", "/templates")

  .config(($routeProvider, TPL_PATH) => {
    $routeProvider.when("/dailyTasks", {
      templateUrl: TPL_PATH + "/dailyTasks.html",
    });
    $routeProvider.when("/motivationPhrases", {
      templateUrl: TPL_PATH + "/motivationPhrases.html",
    });
    $routeProvider.otherwise({
      redirectTo: "/dailyTasks",
    });
  });
