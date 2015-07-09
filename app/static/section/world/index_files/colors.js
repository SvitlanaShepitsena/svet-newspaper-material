(function () {
    angular.module('common').config(function ($mdThemingProvider) {
        var mainNavMap = $mdThemingProvider.extendPalette('grey', {
            'A100': '#474341'
        });
        $mdThemingProvider.definePalette('svet', mainNavMap);
        // Use that theme for the primary intentions
        $mdThemingProvider.theme('default').primaryPalette('svet', {
            'default': '400', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '200',
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
            .backgroundPalette('grey', {
                'default': '50'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
    });
})();

