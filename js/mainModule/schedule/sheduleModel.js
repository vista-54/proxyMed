/**
 * Created by Vista on 07.07.16.
 */

main.service('sheduleModel', function (requestService, userUrl, $sessionStorage) {
    var action = {
        getParts: function (config, successCallback, errorCallback) {
            var data={
                hospital_id:$sessionStorage.hospital_id
            }
            handleSuccess = function (response) {
                successCallback(response.data);
            };
            handleError = function (response) {
                errorCallback(response);
            };
            requestService.request('GET', userUrl.mainModule.sheduleCtrl.getParts, data, config, handleSuccess, handleError)
        }
    };
    return action;
});