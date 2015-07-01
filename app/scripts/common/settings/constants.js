(function () {
    'use strict'
    //var fbDomain = 'svet';
    var fbDomain = 'svet-test';
    angular.module('common')
        .constant('domain', fbDomain === 'svet' ? 'production' : 'test')
        .constant('url', 'https://' + fbDomain + '.firebaseio.com/')
        .constant('users', 'https://' + fbDomain + '.firebaseio.com/user-management/users/')
        .constant('corporate', 'https://' + fbDomain + '.firebaseio.com/events/corporate/')
        .constant('ads', 'https://' + fbDomain + '.firebaseio.com/ads/')

        .constant('userAuth', {})
        .constant('lastEditorPost', {})
        .constant('svetNews', {})
        .constant('svetBlogsConst', {})
        .constant('svetEventsConst', {})
        .constant('svetPost', {})
        .constant('classified', {})
        .constant('feedback', {})
        .constant('viewModalConst', {})
        .constant('dt', {})
        .constant('classifiedInterval', 63000)
        //.constant('classifiedInterval', 3000)
        .service('urlUsers', function (url) {
            this.url = url + '/user-management/users/';
        })
        .constant('SOCIAL_PLUGINS', [
            'like', 'share-button', 'send', 'post', 'video',
            'comments', 'page', 'follow'
        ])
        .value('weather', 'https://publicdata-weather.firebaseio.com/chicago')
        .value('avatar', '/img/auth/user.png')
        .value('defimg', '/img/common/picture-thumb.png')
        .value('alex', '/img/auth/alex-sepia.jpg')
})();
