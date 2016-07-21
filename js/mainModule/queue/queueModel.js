/**
 * Created by Vista on 15.07.16.
 */

main.service('queueModel', function (requestService, userUrl, $sessionStorage) {
    var generateTable = function (data) {
        var start
    };

    var createHours = function (data) {
        var shedule_start = new Date(data.shift.date_from * 1000).getHours();
        var shedule_end = new Date(data.shift.date_to * 1000).getHours();
        if(shedule_end===0){
            shedule_end=24;
        }
        var arr = [];
        for (var i = shedule_start; i < shedule_end; i++) {
            arr.push(i);
        }
        return arr;
    };
    var createMinutes = function (data) {
        var arr=[];
        for (var i = 0; i < 60; i += data.shift.time_receipt) {
            arr.push(i);
        }
        return arr;
    }
    var model = {
        getQueueTable: function (data) {
            console.log(data);
            return {
                'hours': createHours(data),
                'minutes': createMinutes(data),
                'interval': data.shift.time_receipt,
                'countOfInterval':{'width':100/(60/data.shift.time_receipt)+'%'}
            }
        }
    };
    return model;
});