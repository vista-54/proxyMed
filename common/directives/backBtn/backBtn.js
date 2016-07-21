/**
 * Created by Vista on 04.07.16.
 */
main.directive("backBtn", ['$window',function ($window) {
    return {
        restrict: 'A',
        templateUrl:'common/directives/backBtn/backBtn.html',
        link: function(scope, element, attrs) {
            console.log('backBtn');
            element.on('click', function() {
                $window.history.back();
            });
        }
    };
}]);