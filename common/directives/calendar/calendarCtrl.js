/**
 * Created by Vista on 07.07.16.
 */
main.controller('calendarCtrl', function ($rootScope, $scope, calendarModel) {
    console.log('calendarCtrl');
    $scope.init = function () {
        $scope.month = angular.copy(calendarModel.month);
        $scope.currentMonth = angular.copy(calendarModel.month.currMonth.number);
        $scope.currentDay = angular.copy(calendarModel.month.currDay);
        $scope.shortDays = angular.copy(calendarModel.month.shortDaysOfWeek);
    }
    // $scope.qqq = calendarModel;
    // $scope.$watch('qqq.month.currMonth.number',function(){
    //
    //     console.log($scope.qqq.month.currMonth.number);
    // })
    $scope.init();
    $scope.lastMonth = function () {
        console.log($scope.currentMonth);
        $scope.month.currMonth.number--;
        if ($scope.month.currMonth.number < 1) {
            $scope.month.currYear--;
            $scope.month.currMonth.number += 12;
        }
        $scope.month = calendarModel.getMonth($scope.month.currMonth.number, $scope.month.currYear);
        return $scope.month;
    };
    $scope.nextMonth = function () {
        console.log($scope.currentMonth);
        $scope.month.currMonth.number++;
        if ($scope.month.currMonth.number > 12) {
            $scope.month.currYear++;
            $scope.month.currMonth.number -= 12;
        }
        $scope.month = calendarModel.getMonth($scope.month.currMonth.number, $scope.month.currYear);
        return $scope.month;
    };
   
});