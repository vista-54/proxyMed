/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

main.controller('scheduleCtrl', ['$scope', 'sheduleModel',
    function ($scope, sheduleModel) {
        successCallback = function (result) {
            $scope.parts = result;
        };
        errorCallback = function (result) {
            console.log(result);
        };
        sheduleModel.getParts({}, successCallback, errorCallback);
    }]);
