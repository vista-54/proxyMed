/**
 * Created by Vista on 15.07.16.
 */

main.service('ProcedureModel', function (requestService, userUrl, $sessionStorage) {
    var model = {
        getProcedures: function (data, config, successCallback, errorCallback) {
            handleSuccess = function (response) {
                if (typeof response.data.error === 'undefined') {
                    successCallback(response);
                }
                else{
                    successCallback('');
                }

            };
            handleError = function (response) {
                errorCallback(response);
            };
            requestService.request('GET', userUrl.mainModule.procedureCtrl.getProcedures, data, config, handleSuccess, handleError)
        }
    };
    return model;
});