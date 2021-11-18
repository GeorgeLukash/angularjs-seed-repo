angular.module('todoRost', [])
    .component('mainListComponentRost', {
        templateUrl: './scripts/components/todo-rost/main-list-component-rost.html',
        controller: function () {

            this.todos = [
                { text: 'Wake Up', done: false },
                { text: 'Make Coffee', done: false },
                { text: 'Check Email', done: false },
                { text: 'Make Breakfast', done: false },
                { text: 'Do Laundry', done: false },
                { text: 'Go Outside', done: false }
            ];

            this.getTotalTodos = () => {
                return this.todos.length;
            };

            this.addTodo = ($event) => {
                this.todos.push($event);
            };

            this.deleteMarkedTodos = () => {
                const oldList = this.todos;
                this.todos = [];
                angular.forEach(oldList, (todo) => {
                    if (!todo.done) this.todos.push(todo);
                });
            };

            this.deleteAllTodos = () => {
                this.todos = [];
            };
        },
    });