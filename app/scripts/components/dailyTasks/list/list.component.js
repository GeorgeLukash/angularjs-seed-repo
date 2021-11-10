angular.module("app.dailyTasks").component("listComponent", {
  templateUrl: "./scripts/components/dailyTasks/list/list.component.html",
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
