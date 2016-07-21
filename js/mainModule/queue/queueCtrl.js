/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


main.controller('queueCtrl', ['$http', '$scope', '$sessionStorage', '$stateParams', '$localStorage', 'userUrl', 'queueModel', function ($http, $scope, $sessionStorage, $stateParams, $localStorage, userUrl, queueModel) {
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
        $http.post(userUrl.mainModule.api + userUrl.mainModule.queueTableCtrl.getQueueItems + 'access-token=' + $sessionStorage.auth_key, data)
            .success(function (result) {
                console.log(result);
                $scope.queues = queueModel.getQueueTable(result);
                console.log($scope.queues);
                // $scope.partsOfQueues = result.queues;
                // $scope.currentDoc = result.doctor;
            })
            .error(function (error) {
                console.log(error);
            });
    };
    $scope.getQueueItems();

    $scope.setQueueItem = function (time_from, time_to) {
        var data = {
            shifts_id: $stateParams.shifts_id,
            doctor_id: $stateParams.doctor_id,
            patient_id: $sessionStorage.user_id,
            time_from: time_from,
            time_to: time_to,
            notes: 1
        };
        $http.post(userUrl.mainModule.api + userUrl.mainModule.queueTableCtrl.setQueueItem + 'access-token=' + $sessionStorage.auth_key, data)
            .success(function (result) {
                $scope.getQueueItems();
                alert('Ві успишно стали до черги');
                console.log(result);
            })
            .error(function (error) {
                console.log(error);
            })
    }
    $scope.setData = function (day, month, year) {
        $scope.getShedule(new Date(year, month - 1, day));
        console.log('day=>' + day + 'month=>' + month + 'year=>' + year);
    }
}]);