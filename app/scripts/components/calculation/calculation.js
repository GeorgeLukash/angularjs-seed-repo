angular.module('app.Calculate', [])
    .controller('CalculationController', function ($scope, helperService, commonConst) {
        $scope.initalArray = commonConst.initArray;
        $scope.mappedArray = helperService.remapInitArray($scope.initalArray);
    });
