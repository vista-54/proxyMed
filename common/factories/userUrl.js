/**
 * Created by Vista on 01.07.16.
 */
main.factory('userUrl', function () {

    var url = {};
    url.mainModule = {
        api: 'http://proxymed.apes-at-work.com/api/web/v1/',
        loginCtrl: {
            login: 'site/login?',
        },
        sheduleCtrl: {
            getParts: 'department/view-all?',
        },
        partViewCtrl: {
            getShedule: 'schedule/view-by-department?'
        },
        queueTableCtrl: {
            getQueueItems: 'appointment/daily-schedule?',
            setQueueItem: 'appointment/add?'
        },
        procedureCtrl: {
            getProcedures: 'prescribing/view-all?'
        },
        userProfileCtrl: {
            getUserCard: 'user/view-one?'
        },
        favoriteCtrl: {
            get: 'therapist/view-my-doctors?',
            add: 'therapist/add?',
            delete:'therapist/delete?'
        },
        registrationCtrl: {
            registrationFnc: 'site/signup-patient',
            getClinicsInTheCity: 'hospital/find'
        }
    }


    return url;

});