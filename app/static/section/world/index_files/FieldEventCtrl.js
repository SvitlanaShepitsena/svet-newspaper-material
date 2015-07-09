(function () {
    'use strict';

    angular.module('events')
        .controller('FieldEventCtrl', function ($scope,$stateParams) {
            var fieldEvent = this;
            fieldEvent.year = $stateParams.year;

        });
})();

