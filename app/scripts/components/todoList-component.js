angular.module("app.homePages",).component("todoList", {
   templateUrl: "./scripts/components/todoList-component.html",
   controller: function() {
      // TODO:-think about rename
      this.todo = [];

      this.addTodo = function($event) {
         this.todo.push($event);
         console.log(this.todo)
      };

      this.clearTodo = () => {
         this.todo = [];
      };

      this.deleteOne = function(tod) {
         let item =this.todo.indexOf(tod)
         this.todo.splice(item, 1)
      };

      this.updateTodo = function(todo, prop, value) {
         todo[prop] = value;      
       };

      this.filterActive = function() {
         this.todo = this.todo.filter(todo => !todo.done) 
         // this.todo = [];
      }
      this.filtredTodo = function() {
         const newTodo = []
      }
   },
})