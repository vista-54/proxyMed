/**
 * Created by Vista on 20.07.16.
 */
main.directive('favorite', [function () {
    return {
        restrict: 'A',
        templateUrl: 'common/directives/favorites/favorites.html',
        link: function (scope, element, attrs) {

            element.on('click', function () {
                var inFav= JSON.parse(element.attr('data-inFavorites'));
                if (inFav) {
                    element.attr('data-inFavorites', false);
                    scope.delete(element.attr('data-row-id'));
                }
                else {
                    element.attr('data-inFavorites', true);
                    scope.favoriteChange(element.attr('data-doctor-id'));

                }
                console.log(element.attr('data-inFavorites'));
                // console.log(inFav);
            })
            
        },
        controller: 'favoriteDirCtrl'
    };
}]);