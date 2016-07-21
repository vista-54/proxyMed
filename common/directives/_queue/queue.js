/**
 * Created by Vista on 18.07.16.
 */


main.directive('queue',function(){
    return {
        restrict: 'A',
        templateUrl: 'common/directives/queue/queue.html',
        link: function (scope, element, attrs) {
            
        },
        controller: 'queueDirCtrl'
    };
});