angular.module("app.homePages").component("addTodo", {
   templateUrl: "./scripts/components/add-component/add-component.html",
   bindings: {
      todo: "<",
      onUpdate: "&",
   },

   controller: function() {

      this.addTodo = function() {
         if (this.todoText != "") {
            this.onUpdate({
               $event: {
                  // id: todo.length,
                  text: this.todoText,
                  done: false
               }
            });
         this.todoText="";
         }
         
      }
   }
})