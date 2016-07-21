/**
 * Created by Vista on 06.07.16.
 */
main.directive('validInput',[function () {
    return {
        restrict: 'A',
        scope:{
            model: "=ngModel"
        },
        link: function (scope, element, attrs, ngModel) {
            scope.$watch('model',function () {
                console.log(scope.model);
            })
        }
    };
}])