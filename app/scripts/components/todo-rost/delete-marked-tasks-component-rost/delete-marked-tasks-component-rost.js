angular
    .module('todoRost')
    .component('deleteMarkedTasksComponentRost', {
        templateUrl: './scripts/components/todo-rost/delete-marked-tasks-component-rost/delete-marked-tasks-component-rost.html',
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