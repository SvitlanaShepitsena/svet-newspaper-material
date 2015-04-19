(function () {
    'use strict'

    angular.module('app')

        .constant('url', 'https://svet.firebaseio.com/')
        .service('urlUsers', function (url) {

            this.url = url+'/user-management/users/';

        })
        .value('weather', 'https://publicdata-weather.firebaseio.com/chicago');

})();
