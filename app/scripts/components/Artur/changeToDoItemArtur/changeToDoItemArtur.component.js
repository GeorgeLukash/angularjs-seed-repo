angular.module('todos').component('changeToDoItem', {
    templateUrl: '/scripts/components/Artur/changeToDoItemArtur/changeToDoItemArtur.template.html',
    bindings: {
        fieldValue: '<',
        fieldType: '@?',
        onUpdate: '&'
    },
    controller: function () {
        this.editMode = false;

        this.handleModeChange = function () {
            if (this.editMode) {
                this.onUpdate({ value: this.fieldValue });
                this.fieldValueCopy = this.fieldValue;
            }
            this.editMode = !this.editMode;
        };

        this.reset = function () {
            this.fieldValue = '';
        };

        this.$onInit = function () {
            this.fieldValueCopy = this.fieldValue;

            if (!this.fieldType) {
                this.fieldType = 'text';
            }
        };
    }
});