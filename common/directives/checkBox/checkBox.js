/**
 * Created by Vista on 18.07.16.
 */
main.directive("ch", [function () {
    return {
        restrict: 'A',
        scope:{
            
        },
        templateUrl: 'common/directives/checkBox/checkbox.html',
        link: function (scope, element, attrs) {
            // console.log('ch is work');
            element.on("click", function () {

                if(element.children().children().css('display')==="none"){
                    // element.children().children().show();
                    element.children().children().css({'display':'block'});
                }
                else{
                    // element.children().children().hide();
                    element.children().children().css({'display':'none'});
                }
                // if(typeof element.children().children().attr('src')!=='undefined'){
                //     element.children().children().removeAttr('src');
                // }
                // else{
                //     element.children().children().attr('src','common/img/icons/check.png');
                // }
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