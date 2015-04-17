(function () {
    angular.module('app').config(function ($mdThemingProvider) {
        $mdThemingProvider.definePalette('newspaper', {
            '50': 'F5E9DA',
            '100': 'F0EBE1',
            '200': 'C4B3A7',
            '300': 'F0E9E1',
            '400': '9C8778',
            '500': '8C7769',
            '600': '7A685C',
            '700': '63554B',
            '800': '4F433B',
            '900': '38302A',
            'A100': 'FAF7F2',
            'A200': 'F5E9DA',
            'A400': 'F5E9DA',
            'A700': 'F5E9DA',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('newspaper', {
                'default': '300'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
            .warnPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
            .backgroundPalette('newspaper', {
                'default': '50'
            })
    });
})();

