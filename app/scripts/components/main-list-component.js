angular.module('app.homePages')
    .component('mainListComponent', {
        templateUrl: './scripts/components/main-list-component.html',
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

            this.clear = () => {
                const oldList = this.todos;
                this.todos = [];
                angular.forEach(oldList, (x) => {
                    if (!x.done) this.todos.push(x);
                });
            };

            this.clearAll = () => {
                this.todos = [];
            };
        },
    });
