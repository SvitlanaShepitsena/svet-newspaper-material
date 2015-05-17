(function () {
    'use strict';

    angular.module('sections.contact')
        .controller('GetSvobodaNewsCtrl', function ($scope, NewsGeneratorServ) {
            NewsGeneratorServ.getGenerateNewsWithImages();

        });
})();

