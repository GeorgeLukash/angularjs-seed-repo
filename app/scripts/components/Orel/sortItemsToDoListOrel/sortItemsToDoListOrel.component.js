angular.module("app.dailyTasks").component("sortItemsToDoListComponent", {
  templateUrl:
    "./scripts/components/Orel/sortItemsToDoListOrel/sortItemsToDoListOrel.component.html",
  bindings: {
    todo: "<",
  },
  controller: function () {
    this.isSorted = false;
    this.sortByPriority = () => {
      if (this.isSorted === false) {
        this.todo.sort((prev, next) => next.priority - prev.priority);
        this.isSorted = true;
      } else {
        this.todo.sort((prev, next) => prev.priority - next.priority);
        this.isSorted = false;
      }
    };
  },
});
