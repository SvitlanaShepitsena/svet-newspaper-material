(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function ($scope, user,$rootScope) {
            var app = this;
            $rootScope.user = user;

        });
})();

