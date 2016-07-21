/**
 * Created by Vista on 14.07.16.
 */
main.directive('pxHeader', [function () {
    return {
        restrict: 'E',
        templateUrl: 'common/directives/header/header.html',
        link: function (scope, element, attrs) {
            console.log('Calendarlink');
            console.log(scope.month);

        },
        controller: 'headerCtrl'
    };
}]);