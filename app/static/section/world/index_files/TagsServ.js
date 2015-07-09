(function () {
    'use strict';
    angular.module('common')
        .factory('TagsServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                get: function () {
                },
                getRandomTags: function () {
                    var rTags = [];
                    for (var i = 0; i < 5; i++) {
                        rTags.push(faker.lorem.words(1))
                    }
                    return rTags.join(', ');
                }
            };
        });
})();
