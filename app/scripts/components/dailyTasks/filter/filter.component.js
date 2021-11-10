angular.module("app.dailyTasks").component("filterComponent", {
  templateUrl: "./scripts/components/dailyTasks/filter/filter.component.html",
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
