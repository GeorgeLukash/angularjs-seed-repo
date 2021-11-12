angular
    .module('app.homePages')
    .component('deleteMarkedTasksComponent', {
        templateUrl: './scripts/components/delete-marked-tasks-component/delete-marked-tasks-component.html',
        bindings: {
            onDelete: '&',
            onDeleteAll: '&'
        },
        controller: function () {

            this.deleteMarked = () => {
                this.onDelete();
            };

            this.deleteAll = () => {
                this.onDeleteAll();
            };
        },
    });