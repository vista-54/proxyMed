/**
 * Created by Vista on 19.07.16.
 */

main.service('favoriteModel', function (requestService, userUrl, $sessionStorage) {
    var createResponse = function (data) {
        var resultArr = [];
        data.forEach(function (item, i, data) {
            var obj = {
                doctor_last_name: data[i].doc.split(" ")[0],
                doctor_first_name: data[i].doc.split(" ")[1],
                doctor_second_name: data[i].doc.split(" ")[2],
                department: data[i].department,
                specialization: data[i].specialization,
                office: data[i].office,
                doctor_id:data[i].doctor_id,
                id: data[i].id
            };
            resultArr.push(obj);
        })
        return resultArr;

    }

    var model = {
        getFavorites: function (data, config, successCallback, errorCallback) {
            handleSuccess = function (response) {
                response = response.data;
                successCallback(createResponse(response));
                // console.log(response);
            };
            handleError = function (response) {
                errorCallback(response);
            };
            var data = {
                patient_id: $sessionStorage.user_id
            }
            requestService.request('GET', userUrl.mainModule.favoriteCtrl.get, data, config, handleSuccess, handleError)
        },
        add: function (data, config, successCallback, errorCallback) {
            handleSuccess = function (response) {
                response = response.data;
                console.log(response);
            };
            handleError = function (response) {
                errorCallback(response);
            };
            requestService.request('POST', userUrl.mainModule.favoriteCtrl.add, data, config, handleSuccess, handleError)
        },
        delete: function (data, config, successCallback, errorCallback) {
            handleSuccess = function (response) {
                response = response.data;
                console.log(response);
            };
            handleError = function (response) {
                errorCallback(response);
            };
            requestService.request('DELETE', userUrl.mainModule.favoriteCtrl.delete, data, config, handleSuccess, handleError)
        }

    };
    return model;
});