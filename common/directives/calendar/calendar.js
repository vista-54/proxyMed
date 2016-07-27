/**
 * Created by Vista on 07.07.16.
 */
main.directive('calendar', ['$rootScope',
    function ($rootScope) {
    return {
        restrict: 'A',
        templateUrl: 'common/directives/calendar/calendar.html',
        link: function (scope, element, attrs) {
            // console.log('Calendarlink');
            // console.log(scope.month);
        },
        controller: 'calendarCtrl'
    };
}]);

main.directive('day', ['$rootScope', 'calendarModel',
    function ($rootScope, calendarModel) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on("click", function () {
                    if(element.hasClass('dayLast')){
                        return false;
                    }
                    calendarModel.selectedSheduleDay=parseInt(element.children().text());
                    calendarModel.selectedSheduleMonth=parseInt(element.children().attr('data-month'));
                    // console.log(calendarModel.selectedSheduleDay);
                    // console.log(scope.qqq);
                    var elemArr = angular.element(document).find('.whiteBorder');
                    elemArr.removeClass('whiteBorder');
                    element.addClass('whiteBorder');


                })
            },
            controller: 'calendarCtrl'
        };
    }]);
main.directive('switcher', ['$sessionStorage', '$rootScope','calendarModel',
    function ($sessionStorage, $rootScope,calendarModel) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            element.on("click", function () {
                var elemArr = angular.element(document).find('.whiteBorder');
                elemArr.removeClass('whiteBorder');
                if (typeof $rootScope.selectedDay !== 'undefined') {
                    var selectDay = angular.element(document).find('li[name=day] span[data-day=' + $rootScope.selectedDay.day + '][data-month=' + $rootScope.selectedDay.month + ']')
                }
                console.log(calendarModel.selectedDay);
                // element.addClass('whiteBorder');
            })
        },
        controller: 'calendarCtrl'
    };
}]);