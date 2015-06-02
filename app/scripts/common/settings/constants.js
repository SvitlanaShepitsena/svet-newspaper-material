(function () {
    'use strict'
    angular.module('common')
        .constant('url', 'https://svet.firebaseio.com/')
        .constant('users', 'https://svet.firebaseio.com/user-management/users/')
        .constant('corporate', 'https://svet.firebaseio.com/events/corporate/')
        .constant('ads', 'https://svet.firebaseio.com/ads/')
        .constant('userAuth', {})
        .constant('lastEditorPost', {})
        .constant('svetNews', {})
        .constant('svetEventsConst', {})
        .constant('svetPost', {})
        .constant('classified', {})
        .constant('dt', {})
        .constant('classifiedInterval', 63000)
        .service('urlUsers', function (url) {
            this.url = url + '/user-management/users/';
        })
        .value('weather', 'https://publicdata-weather.firebaseio.com/chicago')
        .value('avatar', '/img/auth/user.png')
        .value('defimg', '/img/common/picture-thumb.png')
        .value('alex', '/img/auth/alex-sepia.jpg')
})();
