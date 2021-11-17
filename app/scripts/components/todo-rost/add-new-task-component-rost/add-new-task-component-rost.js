angular.module('todoRost')
    .component('addNewTaskComponentRost', {
        templateUrl: './scripts/components/todo-rost/add-new-task-component-rost/add-new-task-component-rost.html',
        bindings: {
            onUpdate: '&'
        },
        controller: function () {

            this.isValid = true;

            this.todoInputTask = "";

            this.todoAdd = function () {
                if (this.todoInputTask.trim() != "") {
                    this.isValid = true;
                    this.onUpdate({
                        $event: {
                            text: this.todoInputTask,
                            done: false
                        },
                    });
                    this.todoInputTask = "";
                }   else {
                    this.isValid = false;
                }
            };
        },
    });