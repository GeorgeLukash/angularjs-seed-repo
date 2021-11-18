angular.module("vladTodo")
   .component("todoListVladyslav", {
      templateUrl: "./scripts/components/vlad-todo-components/vlad-todo-list-component.html",
      controller: function() {
         this.todo = [];
         this.allTodos = [];

         this.addTodo = function($event) {
            this.todo.push($event);
            this.allTodos = this.todo;
         };

         this.clearTodo = () => {
            this.todo = [];
            this.allTodos = [];
         };

         this.deleteOne = function(tod) {
            let item = this.todo.indexOf(tod);
            this.todo.splice(item, 1);
         };

         this.updateTodo = function ({ todoId, prop, value }) {
            this.todo = this.todo.map(function (todo) {
               return todo.id === todoId ? Object.assign(todo, { [prop]: value }) : todo;
            });
         };

         this.filterActive = function() {
            this.todo = this.allTodos.filter(todo => !todo.done);
         };

         this.filterCompleted = function() {
            this.todo = this.allTodos.filter(todo => todo.done);
         };

         this.filterAll = function() {
            this.todo = this.allTodos;
         };
      },
})
