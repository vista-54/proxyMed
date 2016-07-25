/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

main.controller('scheduleCtrl', ['$scope', 'sheduleModel','$rootScope',
    function ($scope, sheduleModel,$rootScope) {
        successCallback = function (result) {
            $scope.parts = result;
            $rootScope.globalLoader={'opacity':0};
        };
        errorCallback = function (result) {
            console.log(result);
        };
        sheduleModel.getParts({}, successCallback, errorCallback);
    }]);
