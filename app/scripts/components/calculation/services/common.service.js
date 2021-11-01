angular.module('app.Calculate')
    .service('helperService', function () {
        this.cloneDeepObject = function (oldObject) {
            var newObject = { ...oldObject };
            for (key in oldObject) {
                var isObject = (oldObject[key] instanceof Object);
                var isArray = (oldObject[key] instanceof Array);
                var isFunction = (oldObject[key] instanceof Function);
                if (oldObject[key] && isObject && !isArray && !isFunction) {
                    newObject[key] = this.cloneDeepObject(oldObject[key]);
                }
            }
            return newObject;

        };
        this.remapInitArray = function (someArray) {
            return [...someArray]
                .filter(e => e.isValid)
                .map(el => {
                    var newEl = this.cloneDeepObject(el);
                    newEl.name = `Super ${el.name}. Yeah!!`;
                    newEl.desc.data = `Very important ${newEl.desc.data}`;
                    newEl.desc.someNewValue.superText = `Just want to say: ${newEl.desc.someNewValue.superText}`;
                    newEl.desc.someNewValue.hyperText.id = `ID: ${newEl.desc.someNewValue.hyperText.id}`;
                    return newEl;
                });
        };
    });
