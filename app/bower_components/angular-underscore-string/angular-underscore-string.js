'use strict';

angular.module('underscore.string', [])
  .filter('s', function() {
    return function(str, fn, params) {
      str = str || '';
      params = params || [];
      params.unshift(str);
      return fn ? s[fn].apply(this, params) : str;
    };
  });
angular.module('underscore.string', [])
  .factory('str', function() {
    return function(str, fn, params) {
      str = str || '';
      params = params || [];
      params.unshift(str);
      return fn ? s[fn].apply(this, params) : str;
    };
  });
