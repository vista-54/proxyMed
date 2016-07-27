/**
 * Created by Vista on 18.07.16.
 */
main.directive("ch", [function () {
    return {
        restrict: 'A',
        scope: {},
        templateUrl: 'common/directives/checkBox/checkbox.html',
        link: function (scope, element, attrs) {
            // console.log(attrs);


            element.on("click", function () {
                if (element.children().hasClass('inactive')) {
                    return false;
                }
                if (attrs.page !== 'remember') {
                    var chArr = angular.element(document).find('.ch');
                    chArr.children().css({'display': 'none'});
                }


                if (!JSON.parse(element.attr('data-queue-status'))) {
                    element.children().children().css({'display': 'block'});
                    element.attr('data-queue-status', true);
                }
                else {
                    element.children().children().css({'display': 'none'});
                    element.attr('data-queue-status', false);
                }


            })
        },
        // controller:function ($scope) {
        //     $scope.img='';
        //     $scope.check=function () {
        //         console.log('check');
        //     }
        // }
    };
}]);