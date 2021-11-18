angular.module("app.dailyTasks").component("listOfItemsToDoListComponent", {
  templateUrl:
    "./scripts/components/Orel/listOfItemsToDoListOrel/listOfItemsToDoListOrel.component.html",
  bindings: {
    todo: "<",
    onDelete: "&",
  },
  controller: function () {
    this.deleteOne = (elem) => {
      this.onDelete({
        $event: {
          item: elem,
        },
      });
    };

    this.isEdit = false;
    this.edit = () => {
      this.isEdit = true;
    };
    this.save = () => {
      this.isEdit = false;
    };
  },
});
