/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


main.controller('mainInfoCtrl', function ($scope, $sessionStorage) {
    console.log('mainInfoCtrl');
    $scope.username = $sessionStorage.FullUserName;
    $scope.info = $sessionStorage.info;
});