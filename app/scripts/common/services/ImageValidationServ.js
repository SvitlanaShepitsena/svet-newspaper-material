(function () {
    'use strict';
    angular.module('common')
        .factory('ImageValidationServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                validate: function (img, attrs) {
                    var errMessages = [];
                    if (attrs.svMaxSize && img.size > attrs.svMaxSize * 1048576) {
                        errMessages.push('Image exceeds max size limit.');
                    }
                    if (attrs.svMinWidth && img.width < attrs.svMinWidth) {
                        errMessages.push('Image width is below  the limit');
                    }
                    if (attrs.svMinHeight && img.height < attrs.svMinHeight) {
                        errMessages.push('Image height is below the limit');
                    }
                    return errMessages;
                }
            }
        });
})();
