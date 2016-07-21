/**
 * Created by Vista on 20.07.16.
 */


main.controller('favoriteDirCtrl', ['$scope', 'favoriteModel', function ($scope, favoriteModel) {
    
    $scope.favoriteChange = function (id) {
        successCallback = function (result) {
            $scope.favorites = result;
        };
        errorCallback = function (result) {
            console.log(result);
        };
        var data = {
            doctor_id: id
        };
        favoriteModel.add(data, {}, successCallback, errorCallback);
    };
    $scope.delete = function (id) {
        successCallback = function (result) {
            $scope.favorites = result;
        };
        errorCallback = function (result) {
            console.log(result);
        };
        var data = {
            id: id
        };
        favoriteModel.delete(data, {}, successCallback, errorCallback);
    }
}])