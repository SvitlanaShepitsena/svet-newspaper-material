(function () {
    'use strict';

    angular.module('home')
        .controller('AppCtrl', function ($scope, user,$rootScope,toastr) {
            var app = this;
            $rootScope.user = user;


            $rootScope.$on('error', function () {
                toastr.error('error');
            })

        });
})();

