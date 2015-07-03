(function () {
    'use strict';
    angular.module('common')
        .factory('AWSServ', function ($q, $http, url, users, $firebaseObject, $firebaseArray) {
            return {
                getImages: function (bucket) {

                    var myRegexp = /<key>([^<])+/gi;
                    var match;
                    var files = [];
                    return $q(function (resolve, reject) {

                        var bucketUrl = 'http://' + bucket + '.s3-us-west-2.amazonaws.com';
                        $http.get(bucketUrl).then(function (data) {
                            var myString = data.data;
                            match = myRegexp.exec(myString);
                            while (match !== null) {
                                if (match) {

                                    var fileName = match[0].replace('<Key>', '');
                                    files.push(fileName);
                                }
                                match = myRegexp.exec(myString);
                            }
                            resolve(files);
                        });
                    });
                }
            };
        });
})();
