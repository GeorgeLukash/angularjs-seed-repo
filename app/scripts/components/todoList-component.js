angular.module("app.homePages",).component("todoList", {
   templateUrl: "./scripts/components/todoList-component.html",
   controller: function() {
      // TODO:-think about rename
      this.todo = [];
      this.allTodos = [];

      this.addTodo = function($event) {
         this.todo.push($event);
         this.allTodos = this.todo
         console.log(this.todo)
      };

      this.clearTodo = () => {
         this.todo = [];
         this.allTodos = [];
      };

      this.deleteOne = function(tod) {
         let item =this.todo.indexOf(tod)
         this.todo.splice(item, 1)
      };

      this.updateTodo = function(todo, prop, value) {
         todo[prop] = value;      
       };

      this.filterActive = function() {
         this.todo = this.allTodos.filter(todo => !todo.done) 
      }

      this.filterCompleted = function() {
         this.todo = this.allTodos.filter(todo => todo.done)
      }

      this.filterAll = function() {
         this.todo = this.allTodos
      }
   },
})