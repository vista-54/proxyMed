/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


main.controller('favoritesdoctorsCtrl',['$scope', '$http', '$sessionStorage', '$localStorage','userUrl', function ($scope, $http, $sessionStorage, $localStorage,userUrl) {
    console.log('favoritesdoctorsCtrl');
    $scope.getFavoritesDoctors = function () {
        $http.get(userUrl.mainModule.api+userUrl.favoritesdoctorsCtrl.getFavoritesDoctors + 'access-token=' + $sessionStorage.auth_key)
                .success(function (result) {
                    console.log(result);
                })
                .error(function (error) {
                    console.log(error);
                });
    };
    $scope.getFavoritesDoctors();
}]);