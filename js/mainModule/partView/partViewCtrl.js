/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

main.controller('partViewCtrl', ['$state', '$rootScope', '$scope', '$sessionStorage', '$stateParams', '$http', '$localStorage', 'userUrl', 'userConst', 'partModel',
    function ($state, $rootScope, $scope, $sessionStorage, $stateParams, $http, $localStorage, userUrl, userConst, partModel) {
        $scope.currdate = new Date();
        // $rootScope.selectedDay={
        //     day:$scope.currdate.getDate(),
        //     month:$scope.currdate.getMonth()+1,
        //     year:$scope.currdate.getFullYear()
        // };
        console.log($scope.currdate);
        $scope.getDate = function (d) {
            var currDate = new Date(d * 1000);
            return (currDate.getHours() > 10 ? currDate.getHours() : '0' + currDate.getHours()) + '.' + (currDate.getMinutes() > 10 ? currDate.getMinutes() : '0' + currDate.getMinutes());
        };
        $scope.getDayOfWeek = function (d) {
            var currDay = new Date(d * 1000);
            return $rootScope.userConst[currDay.getDay];
        };

        $scope.dataPickerChaned = function (date) {
            $scope.getShedule(date.getTime());
        };

        $scope.getShedule = function (date) {
            var data = {
                department_id: $stateParams.part_id,
                date: Math.round((date / 1000), 3)
            };
            successCallback = function (result) {
                $rootScope.globalLoader = {'opacity':0};
                $scope.doctors = result.shifts;
                $scope.currPart = result.department;
            };
            errorCallback = function (result) {
                $rootScope.globalLoader = {'opacity':0};
                console.log(result);
            };
            partModel.getParts(data, {}, successCallback, errorCallback);
            // $http.post(userUrl.mainModule.api + userUrl.mainModule.partViewCtrl.getShedule + 'access-token=' + $sessionStorage.auth_key, data)
            //     .success(function (result) {
            //         console.log(result);
            //         $scope.doctors = result.shifts;
            //
            //         $scope.currPart = result.department;
            //     })
            //     .error(function (error) {
            //         console.log(error);
            //     });
        };
        // $scope.getShedule($scope.currdate);
        if(typeof $rootScope.selectedDay!=='undefined'){
            $scope.getShedule(new Date($rootScope.selectedDay.year,$rootScope.selectedDay.month-1,$rootScope.selectedDay.day));
        }
        else{
            $scope.getShedule($scope.currdate);
        }
        $scope.setData = function (day, month, year) {
            $scope.getShedule(new Date(year, month - 1, day));
            $rootScope.selectedDay={
                day:day,
                month:month,
                year:year
            };
            console.log('day=>' + day + 'month=>' + month + 'year=>' + year);
        }
    }]);