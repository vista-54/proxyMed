/**
 * Created by Vista on 05.07.16.
 */
main.controller('registrationCtrl','$scope','$sessionStorage'
    [function ($scope,$sessionStorage) {
    $scope.registrationFnc = function (form, reg) {
        if (form.$valid) {
            reg.birthday = new Date(reg.birthday).getTime() / 1000;
            if (isNaN(reg.birthday)) {
                delete(reg.birthday);
            }
            var config = {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            };
            var fd = new FormData();
            var file = document.getElementById('file');
//            fd=reg;
            fd.append('imageFile', file.files[0]);
            for (var i in reg) {
                var obj = reg[i];

                fd.append(i, obj);
            }
//            fd.append(reg);
            $http.post($sessionStorage.url, fd, config)
                .success(function (result) {
                    if (typeof result.error === 'undefined') {
                        console.log(result);
                        // var loginData = {
                        //     login: reg['email'],
                        //     password: reg['password']
                        // };
                        // var form = {
                        //     $valid: true
                        // };
                        // $rootScope.login(form, loginData);
                        // window.location = '#/';
                    }
                    else {
                        $scope.errorMsg = ($filter('translate')('Вказана адреса Ел. пошти вже зареєстрована'));

                    }
                }).error(function (error) {
                console.log(error);
            });
            console.log(reg);
        }

//        console.log(model);
    };
    $scope.getClinics=function(){
        $http.get($sessionStorage.url+'hospital/find')
            .success(function (result) {
                console.log(result);
                $scope.clinics=result;
            })
            .error(function (error) {
                console.log(error);
            })
    };
}])

