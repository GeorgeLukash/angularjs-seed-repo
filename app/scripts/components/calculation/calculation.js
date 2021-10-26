angular.module('app.Calculate', [])
  .controller('CalculationController', function($scope, welcomeMessage) {
    var makeArrayMap = function(inputArray) {
        var newArray = inputArray.filter(
            e => e.isValid).map(e => {
            e.name = `Super ${e.name}. Yeah!!`;
        });
        console.log(newArray);
        return newArray;
    };
    $scope.initalArray = [
        {
            isValid: false,
            name: 'Ford',
            order: 0,
            color: 'red'
        },
        {
            isValid: true,
            name: 'Mitsubishi',
            order: 1,
            color: 'green'
        },
        {
            isValid: true,
            name: 'Volvo',
            order: 2,
            color: 'blue'
        }
    ];
    console.log('Init');
    console.log($scope.initalArray);
    console.log('Mapped');
    $scope.mappedArray = makeArrayMap($scope.initalArray);
  });
