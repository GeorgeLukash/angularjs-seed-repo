angular.module("app.dailyTasks").component("mainComponentToDoListComponent", {
  templateUrl:
    "./scripts/components/Orel/mainComponentToDoListOrel/mainComponentToDoListOrel.component.html",
  controller: function () {
    this.todoList = [
      { todoText: "Be happy", priority: 10, done: false, id: 1 },
    ];
    this.todoCopy = this.todoList.slice();
    this.addItem = function ($event) {
      this.todoList.push($event);
      this.todoCopy = this.todoList.slice();
    };
    this.clearAll = () => {
      this.todoList = [];
      this.todoCopy = [];
    };
    this.deleteItem = function ($event) {
      this.todoList.splice($event.item, 1);
      this.todoCopy = this.todoList.slice();
    };
    this.filterList = function ($event) {
      this.todoList = this.todoCopy;
      if ($event !== "") {
        const sortedList = this.todoList.filter((task) => {
          const upperTask = task.todoText.toUpperCase();
          const upperSearch = $event.toUpperCase();
          return upperTask.includes(upperSearch);
        });
        this.todoList = sortedList;
      }
    };
  },
});
