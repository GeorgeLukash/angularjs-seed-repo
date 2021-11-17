angular
    .module('todoRost')
    .component('createTaskAndFilterComponentRost', {
        templateUrl: './scripts/components/todo-rost/create-task-and-filter-component-rost/create-task-and-filter-component-rost.html',
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