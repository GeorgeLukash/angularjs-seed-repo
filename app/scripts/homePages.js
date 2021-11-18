angular.module('app.homePages', [])
    .component('homePage', {
        templateUrl: './homePage.template.html',
        controller: function () {
            this.startToDo = function () {
                $location.path('/login');
            }
        }
    });

