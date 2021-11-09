angular.module("app.homePages").component("itemTodo", {
   templateUrl: "./scripts/components/todo-component/item-component.html",
   bindings: {
      todo: "<",
      hero: '<',
      onDelete: "&",
      onUpdate: "&"
   },
   controller: function() {
      this.deleteOne = (x) =>{
         this.onDelete({
            $event: x
         })
      };

      this.update = function(prop, value) {
         this.onUpdate({text: this.todoText, prop: prop, value: value});
       };

      // this.update = function($event) {
      //    this.onUpdate({
      //       $event: {
      //          text: this.todoText,
      //          done: false
      //       }});
      //  };
   }

})