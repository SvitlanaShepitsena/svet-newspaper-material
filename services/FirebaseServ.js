'use strict'
var q = require('q');
var Firebase = require('firebase');
module.exports = {
    getAll: function (url) {

        var deferred = q.defer();
        var ref = new Firebase(url)

        ref.on("value", function (snapshot) {
                var data = snapshot.val();
                deferred.resolve(data);
            },
            function (Error) {
                deferred.reject(Error);


            }
        );
        return deferred.promise;
    }
}
