angular.module('app.homePages')
    .component('addNewTaskComponent', {
        templateUrl: './scripts/components/add-new-task-component/add-new-task-component.html',
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