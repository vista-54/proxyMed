/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


main.controller('userProfileCtrl',[ '$scope', '$http', '$sessionStorage', '$localStorage','userUrl',function ($scope, $http, $sessionStorage, $localStorage,userUrl) {
$scope.usermame=$sessionStorage.ShortUserName;
    $scope.getUserCard = function () {
        $http.get(userUrl.mainModule.api +userUrl.mainModule.userProfileCtrl.getUserCard+ 'access-token=' + $sessionStorage.auth_key)
                .success(function (result) {
                    console.log(result);
                    $scope.userLogin = result.user;
                    $localStorage.userLogin = result.user;
                    $scope.userInfo = result.info;
                    $localStorage.userInfo = result.info;
                })
                .error(function (error) {
                    console.log(error);
                });
    };
    $scope.getUserCard();
}]);