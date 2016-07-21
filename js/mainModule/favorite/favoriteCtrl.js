/**
 * Created by Vista on 19.07.16.
 */


main.controller('favoriteCtrl', ['$scope', 'favoriteModel', function ($scope, favoriteModel) {
    console.log('favoriteCtrl init success');
    $scope.getFavorites = function () {
        successCallback = function (result) {
            $scope.favorites = result;
        };
        errorCallback = function (result) {
            console.log(result);
        };
        favoriteModel.getFavorites({}, {}, successCallback, errorCallback);
    };
    $scope.getFavorites();
    

}]);