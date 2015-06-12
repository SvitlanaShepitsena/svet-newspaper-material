(function () {
    'use strict';
    angular.module('sections.radio')
        .factory('RadioServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(url + 'radio');

            return {
                getAllPrograms: function () {
                    return $q(function (resolve, reject) {
                        var radioProgramsArr = $firebaseArray(ref);
                        var arrSfs = [];
                        var template = "mms://strean.imcpro.com/svet/";

                        radioProgramsArr.$loaded().then(function () {
                            for (var i = 0; i < radioProgramsArr.length; i++) {
                                var program = radioProgramsArr[i];
                                var completeStream = template + program.$id + '.asf';
                                arrSfs.push(completeStream);
                            }
                            resolve(arrSfs);
                        })
                    });
                },
            };
        });
})();
