angular.module("app.homePages").component("addTodo", {
   templateUrl: "./scripts/components/vlad-todo-components/vlad-add-component/vlad-add-component.html",
   bindings: {
      todo: "<",
      onUpdate: "&",
   },

   controller: function() {
      this.addTodo = function() {
         if (this.todoText !== "") {
            this.onUpdate({
               $event: {
                  id: this.createID(),
                  text: this.todoText,
                  done: false
               }
            });
         this.todoText="";
         }
      };

      this.createID = function () {
         return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
             (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
         );
      };
   }
})
