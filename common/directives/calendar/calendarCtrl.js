/**
 * Created by Vista on 07.07.16.
 */
main.controller('calendarCtrl', function ($rootScope, $scope, calendarModel) {

    $scope.init = function () {
        $scope.month = calendarModel.month;
        $scope.currentMonth = calendarModel.month.currMonth.number;
        $scope.currentDay = calendarModel.month.currDay;
        $scope.shortDays = calendarModel.month.shortDaysOfWeek;
    }
    $scope.init();
    $scope.lastMonth = function () {
        $scope.month.currMonth.number--;
        if ($scope.month.currMonth.number < 1) {
            $scope.month.currYear--;
            $scope.month.currMonth.number += 12;
        }
        $scope.month = calendarModel.getMonth($scope.month.currMonth.number, $scope.month.currYear);
        return $scope.month;
    };
    $scope.nextMonth = function () {
        $scope.month.currMonth.number++;
        if ($scope.month.currMonth.number > 12) {
            $scope.month.currYear++;
            $scope.month.currMonth.number -= 12;
        }
        $scope.month = calendarModel.getMonth($scope.month.currMonth.number, $scope.month.currYear);
        return $scope.month;
    };
   
});