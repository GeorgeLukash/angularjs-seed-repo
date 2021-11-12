angular
    .module('app.homePages')
    .component('createTaskAndFilterComponent', {
        templateUrl: './scripts/components/create-task-and-filter-component/create-task-and-filter-component.html',
        bindings: {
            todos: '<',
            onUpdate: '&'
        },
        controller: function () {

            this.editMode = false;

            this.editTask = (todo) => {
                todo.editMode = true;
            };

            this.save = (todo) => {
                todo.editMode = false;
            };
        },
    });