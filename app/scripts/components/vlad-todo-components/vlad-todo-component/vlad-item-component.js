angular.module("vladTodo")
   .component("itemTodo", {
      templateUrl: "./scripts/components/vlad-todo-components/vlad-todo-component/vlad-item-component.html",
      bindings: {
         todo: "<",
         onDelete: "&",
         onUpdate: "&"
      },
      controller: function() {
         this.deleteOne = (item) =>{
            this.onDelete({
               $event: item
            })
         };

         this.update = function(todoId, prop, value) {
            this.onUpdate({ $event: { todoId, prop, value }});     
         };
      }
})
