(function () {
    'use strict';
    angular.module('sections.home')
        .factory('AgentServ', function ($window) {
            return {
                isIe: function () {
                    var agent = $window.navigator.userAgent;
                    if (agent.indexOf('Trident') > -1 || agent.indexOf('MSIE') > -1) {
                        return true;
                    }
                    return false;
                }
            };
        });
})();
