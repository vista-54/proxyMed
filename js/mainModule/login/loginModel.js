/**
 * Created by Vista on 07.07.16.
 */

main.service('loginModel', function (requestService, userUrl, $sessionStorage) {
    var action = {
        login: function (data, config, successCallback, errorCallback) {
            handleSuccess = function (response) {
                var data = response.data.user;
                $sessionStorage.user = response.data.user;
                $sessionStorage.info = response.data.info;
                $sessionStorage.FullUserName = response.data.user.last_name+' '+response.data.user.first_name+' '+response.data.user.second_name;
                $sessionStorage.ShortUserName = response.data.user.last_name+' '+response.data.user.first_name[0]+'. '+response.data.user.second_name[0]+'.';

                $sessionStorage.hospital_id = data.hospital_id;
                $sessionStorage.stationary_id = data.stationary_id;
                $sessionStorage.auth_key = data.auth_key;
                $sessionStorage.user_id = data.id;


                var dataReturn={
                    status:data.status
                };
                successCallback(dataReturn);
            };
            handleError = function (response) {
                errorCallback(response);
            };
            requestService.request('POST', userUrl.mainModule.loginCtrl.login, data, config, handleSuccess, handleError)
        }
    };
    return action;
});