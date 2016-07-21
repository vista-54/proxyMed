/**
 * Created by Vista on 07.07.16.
 */
main.service('requestService', function ($http, userUrl, $sessionStorage) {
    var action = {
    request : function (method, action, data, config, handleSuccess, handleError) {
        if($sessionStorage.auth_key){
           var auth_key='&access-token='+$sessionStorage.auth_key;
        }
        var getConfig,postConfig;
        (method === "GET") ? getConfig = data : postConfig = data;
        var req = $http({
            method: method,
            url: userUrl.mainModule.api + action+auth_key,
            params: getConfig,
            data: postConfig
        });
        return (req.then(handleSuccess, handleError))
    }
}
    return action;
});