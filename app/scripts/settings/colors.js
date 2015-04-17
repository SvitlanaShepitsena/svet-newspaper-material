(function () {
    angular.module('app').config(function ($mdThemingProvider) {

        $mdThemingProvider.definePalette('svet', {
            '50': '#616161',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': '#616161',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'dark',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('svetDark')
            .primaryPalette('svet', {
                'default':'400'
            }).dark();


        $mdThemingProvider.theme('default')

            .primaryPalette('grey', {
                'default': '400', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '200', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })

            .backgroundPalette('grey', {
                'default': '50'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
            });



    });
})();

