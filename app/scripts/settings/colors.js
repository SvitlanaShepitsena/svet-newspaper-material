(function () {
    angular.module('app').config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'default': '200'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
            .warnPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
            .backgroundPalette('grey', {
                'default': '50'
            })
    });
})();

