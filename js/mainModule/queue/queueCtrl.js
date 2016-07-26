/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


main.controller('queueCtrl', ['$http', '$scope', '$sessionStorage', '$stateParams', '$localStorage', 'userUrl', 'queueModel', '$rootScope',
    function ($http, $scope, $sessionStorage, $stateParams, $localStorage, userUrl, queueModel, $rootScope) {
        console.log('queueCtrl');

        $scope.checkNote = function (note) {//busy?
            if (note === 1) {
                return {'background': 'rgb(255,255,255)', 'pointer-events': 'none'}
            }
            else if (note === 0) {

            }
        }
        $scope.getQueueItems = function () {
            var data = {
                shifts_id: $stateParams.shifts_id
            };
            successCallback = function (result) {
                $rootScope.globalLoader = {'opacity': 0};
                $scope.currentDoc = result.shift.username;
                $scope.queues = queueModel.getQueueTable(result);
            };
            errorCallback = function (result) {
                $rootScope.globalLoader = {'opacity': 0};
                console.log(result);
            };
            queueModel.init(data, {}, successCallback, errorCallback);
        };
        $scope.getQueueItems();
        ////////////////////////


        $scope.setQueueItem = function (time_from, time_to) {
            var data = {
                shifts_id: $stateParams.shifts_id,
                doctor_id: $stateParams.doctor_id,
                patient_id: $sessionStorage.user_id,
                time_from: time_from,
                time_to: time_to,
                notes: 1
            };
            queueModel.set(data, {}, successCallback, errorCallback);
            // $http.post(userUrl.mainModule.api + userUrl.mainModule.queueTableCtrl.setQueueItem + 'access-token=' + $sessionStorage.auth_key, data)
            //     .success(function (result) {
            //         $scope.getQueueItems();
            //         alert('Ві успишно стали до черги');
            //         console.log(result);
            //     })
            //     .error(function (error) {
            //         console.log(error);
            //     })
        }

        $scope.setData = function (day, month, year) {
            // $scope.getShedule(new Date(year, month - 1, day));
            $rootScope.selectedDay = {
                day: day,
                month: month,
                year: year
            };
            console.log('day=>' + day + 'month=>' + month + 'year=>' + year);
        }
    }]);