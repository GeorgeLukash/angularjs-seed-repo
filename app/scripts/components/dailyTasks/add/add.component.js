angular.module("app.dailyTasks").component("addComponent", {
  templateUrl: "./scripts/components/dailyTasks/add/add.component.html",
  bindings: {
    onUpdate: "&",
  },
  controller: function () {
    this.isValid = true;
    this.todoInputTask = "";
    this.todoInputLevel = "";
    this.id = 2;
    this.todoAdd = function () {
      if (this.todoInputTask.trim() != "") {
        this.isValid = true;
        this.onUpdate({
          $event: {
            todoText: this.todoInputTask,
            priority: this.todoInputLevel,
            done: false,
            id: this.id,
          },
        });
        this.todoInputTask = "";
        this.todoInputLevel = "";
        this.id++;
      } else {
        this.isValid = false;
      }
    };
  },
});
