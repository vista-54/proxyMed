/**
 * Created by Vista on 05.07.16.
 */

main.controller('loginCtrl', ['$scope', '$state', 'loginModel','$rootScope',
    function ($scope, $state, loginModel,$rootScope) {

        $scope.login = function (user) {
            console.log('login');
            var user = {};
            user.phone = '380123456786';
            user.password = '11111111';
            successCallback = function (result) {
                $rootScope.globalLoader=false;
                if (result.status === 0) {//амбулаторный
                    $state.go('ambulator');
                }
                if (result.status === 1) {//стационарный
                    $state.go('hospital');
                }
                console.log(result);
            };
            errorCallback = function (result) {
                $rootScope.globalLoader=false;
                console.log(result);
            };
            loginModel.login(user, {}, successCallback, errorCallback);
        };
    }])