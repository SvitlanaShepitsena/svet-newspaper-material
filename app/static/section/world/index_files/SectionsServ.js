(function () {
    'use strict';
    angular.module('article')
        .factory('SectionsServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                all: function () {
                    var urlSections = url + 'sections';
                    var ref = new Firebase(urlSections);
                    var sectionsArr = $firebaseArray(ref);
                    return sectionsArr;
                },
                getRandomSection: function (sections) {
                    var randIndex = Math.floor(Math.random() * sections.length);
                    return sections[randIndex].$id;
                }
            };
        });
})();
