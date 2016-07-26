/**
 * Created by Vista on 22.07.16.
 */
/**
 * Created by Vista on 07.07.16.
 */

main.service('partModel', function (requestService, userUrl, $sessionStorage) {
    var model = {
        getParts: function (data, config, successCallback, errorCallback) {

            handleSuccess = function (response) {
                successCallback(response.data);
            };
            handleError = function (response) {
                errorCallback(response);
            };
            requestService.request('POST', userUrl.mainModule.partViewCtrl.getShedule, data, config, handleSuccess, handleError)
        }
    };
    return model;
});