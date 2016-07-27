/**
 * Created by Vista on 19.07.16.
 */


main.controller('favoriteCtrl', ['$scope', 'favoriteModel','$rootScope', function ($scope, favoriteModel,$rootScope) {
    console.log('favoriteCtrl init success');
    $scope.getFavorites = function () {
        successCallback = function (result) {
            $scope.favorites = result;
            $rootScope.globalLoader={'opacity':0};
        };
        errorCallback = function (result) {
            $rootScope.globalLoader={'opacity':0};
            console.log(result);
        };
        favoriteModel.getFavorites({}, {}, successCallback, errorCallback);
    };
    $scope.getFavorites();
    

}]);