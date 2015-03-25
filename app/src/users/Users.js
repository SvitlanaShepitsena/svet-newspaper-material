(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [ 'ngMaterial' ])
      .config(function () {
      console.log('config')
  })
      .run(function () {
      console.log('run')
  })
  ;


})();
