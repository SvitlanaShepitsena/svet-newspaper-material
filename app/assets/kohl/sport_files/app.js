var mainControllers = angular.module('mainControllers', []);
var mainServices = angular.module('mainServices', []);
var mainApp = angular.module('mainApp', [
    'ngRoute',
    'ngMessages',
    'ui.bootstrap',
    'ui.bootstrap.showErrors',
    'ui.bootstrap.upload',
    'ui.bootstrap.contextMenu',
    'ui.bootstrap.shortcut',
    'ui.bootstrap.savvy',
    'timeago',
    'mainControllers',
    'mainServices'
]);

mainApp.config([
    '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'app/views/index.html',
                controller: 'IndexController',
            }).
            when('/icon/:name', {
                templateUrl: 'app/views/index.html',
                controller: 'IndexController'
            }).
            when('/contributor/:name', {
                templateUrl: 'app/views/index.html',
                controller: 'IndexController'
            }).
            when('/tag/:tag', {
                templateUrl: 'app/views/index.html',
                controller: 'IndexController'
            }).
            when('/contribute', {
                templateUrl: 'app/views/contribute.html',
                controller: 'ContributeController'
            }).
            when('/confirm/:code', {
                templateUrl: 'app/views/confirm.html',
                controller: 'ConfirmController'
            }).
            when('/community', {
                templateUrl: 'app/views/community.html',
                controller: 'CommunityController'
            }).
            when('/custom', {
                templateUrl: 'app/views/custom.html',
                controller: 'CustomController'
            }).
            when('/getting-started', {
                templateUrl: 'app/views/getting-started.html',
                controller: 'GettingStartedController'
            }).
            when('/style', {
                templateUrl: 'app/views/style.html',
                controller: 'StyleController'
            }).
            when('/history', {
                templateUrl: 'app/views/history.html',
                controller: 'HistoryController'
            }).
            when('/login', {
                templateUrl: 'app/views/login.html',
                controller: 'LoginController'
            }).
            when('/admin', {
                templateUrl: 'app/views/admin.html',
                controller: 'AdminController'
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }
]);