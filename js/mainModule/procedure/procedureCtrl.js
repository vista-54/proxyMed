/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


main.controller('procedureCtrl', function ($sessionStorage, $scope, $http, $localStorage, $mdDialog, userUrl, ProcedureModel,$rootScope) {

    $scope.currdate = new Date() / 1000;

    $scope.getTimeOfMixture = function (date) {
        var time = new Date(date * 1000);
        return (time.getHours()>=10?time.getHours():'0'+time.getHours()) + ':' + (time.getMinutes()>=10?time.getMinutes():'0'+time.getMinutes());
    };

    $scope.getProcedures = function (date) {
        var data = {
            day: date,
            stationary_id: $sessionStorage.stationary_id
        };
        successCallback = function (result) {
            $rootScope.globalLoader={'opacity':0};
            console.log(result);
            $scope.procedures = result.data;
        };
        errorCallback = function (result) {
            // console.log(result);
        };
        ProcedureModel.getProcedures(data, {}, successCallback, errorCallback);

        // var day = new Date() / 1000;
        // $http.get(userUrl.mainModule.api + userUrl.mainModule.procedureCtrl.getProcedures + 'stationary_id=' + $localStorage.stationary_id + '&access-token=' + $sessionStorage.auth_key + '&day=' + day)
        //     .success(function (result) {
        //         console.log(result);
        //         $scope.procedures = result.filter(function (element) {
        //             return element.by_day !== false;
        //         });
        //     })
        //     .error(function (error) {
        //         console.log(error);
        //     });
    };

    $scope.getProcedures($scope.currdate);

    $scope.confirm=function(id){
        var data={
            id:id
        }
    }

    $scope.openMoreInfo = function (key) {
        var moreInfoArray = angular.element(document).find('.moreInfoBlock');
        console.log(moreInfoArray.length);
        var currBlock = angular.element(moreInfoArray[key]);
        if (currBlock.hasClass('inVisible')) {
            currBlock.removeClass('inVisible');
            currBlock.addClass('visible');
        }
        else {
            currBlock.removeClass('visible');
            currBlock.addClass('inVisible')
        }
    }

    $scope.openFullInfo = function (arg) {
        console.log(arg.currentTarget.children);
    };
    $scope.confirmMixture = function (id, confirm) {
        var data = {
            id: id,
            confirm: confirm
        };
        $http.post($sessionStorage.url + 'prescribing/confirm?access-token=' + $sessionStorage.auth_key, data)
            .success(function (result) {
                console.log(result);
            })
            .error(function (error) {
                console.log(error);
            })
    };

    $scope.setData = function (day, month, year) {
        $scope.getProcedures(new Date(year, month - 1, day) / 1000);
        console.log('day=>' + day + 'month=>' + month + 'year=>' + year);
    };


    //////////GovnoCoD////////////////

    $scope.openEditForm = function (time, id) {
        // var inputsTotal=document.getElementsByName('timeOfGetProcedure');
        // inputsTotal.forEach(function (element, index, array) {
        //     element.classList.add('invisible');
        //     if(parseInt(element.attributes['data-procedure-id'].value)===id){
        //         element.classList.remove('invisible');
        //     }
        // })
        $scope.time = time;
        $scope.id = id;
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            templateUrl: 'modals/editTimeOfProcedure.html',
            locals: {
                items: $scope
            },
            controller: function ($scope, $mdDialog, items, $http) {
                $scope.items = items;
                $scope.timeOfProcedure = new Date(items.time * 1000);
                console.log($scope.timeOfProcedure);
                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }
                $scope.sendData = function (newTime) {
                    var data = {
                        id: items.id,
                        time: new Date(newTime).getTime() / 1000
                    }
                    $http.put($sessionStorage.url + 'prescribing/update-by-time?access-token=' + $sessionStorage.auth_key, data)
                        .success(function (result) {
                            console.log(result);
                        })
                        .error(function (error) {
                            console.log(error);
                        })
                }
            }
        });
    }

    $scope.upDate = function (id, newTime) {
        var data = {
            id: id,
            time: newTime
        }
        $http.post($sessionStorage.url + 'prescribing/update-by-time?access-token=' + $sessionStorage.auth_key, data)
            .success(function (result) {
                console.log(result);
            })
            .error(function (error) {
                console.log(error);
            })
    }
});
