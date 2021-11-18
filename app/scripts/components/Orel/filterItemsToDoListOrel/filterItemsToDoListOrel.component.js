angular.module("app.dailyTasks").component("filterItemsToDoListComponent", {
  templateUrl:
    "./scripts/components/Orel/filterItemsToDoListOrel/filterItemsToDoListOrel.component.html",
  bindings: {
    filterTodo: "&",
  },
  controller: function () {
    this.filterText = "";
    this.searchTodo = () => {
      this.filterTodo({
        $event: this.filterText,
      });
    };
  },
});
