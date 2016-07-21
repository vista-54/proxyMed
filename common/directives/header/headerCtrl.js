/**
 * Created by Vista on 15.07.16.
 */

main.controller('headerCtrl', function ($scope, $state) {
    $scope.menuItems = [
        {
            'name': 'Кабінет',
            'link': 'userProfile'
        },
        {
            'name': 'Вихід',
            'link': 'logout'
        }
    ];
    $scope.go = function (link) {
        $state.go(link);
    }
});