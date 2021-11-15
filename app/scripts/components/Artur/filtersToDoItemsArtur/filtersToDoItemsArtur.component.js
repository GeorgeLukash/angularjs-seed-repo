angular.module("todos").component("filtersToDoItems", {
    templateUrl: "/scripts/components/Artur/filtersToDoItemsArtur/filtersToDoItemsArtur.template.html",
    bindings: {
        sort: '=',
        query: '=',
    },
    controller: function () {
        this.sort = 'time';
    },
});