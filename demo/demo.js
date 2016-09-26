angular.module('demobs', ['ngRoute', 'ngui'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/demo/view.html',
                controller: NotifyCtrl,
                page:'notify'
            });

        //$locationProvider.html5Mode(true);
    })
    .run(['$rootScope', '$route', function ($rootScope, $route) {

        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.$pageName = document.title = $route.current.page;
        });
    }])
    ;
;

angular.module('ngui', [
    'ngui-notify'
])
    .config(function ($logProvider) {
        $logProvider.debugEnabled(true);
    });
;
