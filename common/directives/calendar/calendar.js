/**
 * Created by Vista on 07.07.16.
 */
main.directive('calendar', [function () {
    return {
        restrict: 'A',
        templateUrl: 'common/directives/calendar/calendar.html',
        link: function (scope, element, attrs) {
            console.log('Calendarlink');
            console.log(scope.month);

        },
        controller: 'calendarCtrl'
    };
}]);

main.directive('day', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on("click", function () {
                var elemArr = angular.element(document).find('.whiteBorder');
                elemArr.removeClass('whiteBorder');
                element.addClass('whiteBorder');
            })
        },
        // controller: 'calendarCtrl'
    };
}]);
main.directive('switcher', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on("click", function () {
                var elemArr = angular.element(document).find('.whiteBorder');
                elemArr.removeClass('whiteBorder');
                // element.addClass('whiteBorder');
            })
        },
        // controller: 'calendarCtrl'
    };
}]);