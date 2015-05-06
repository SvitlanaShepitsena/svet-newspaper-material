(function () {
    'use strict';
    angular.module('article')
        .directive('svNewArticleForm', function (SectionsServ, $rootScope) {
            function getRandomSection(sections) {
                var randIndex = Math.floor(Math.random() * sections.length);
                return sections[randIndex];
            }

            function getRandomTags() {
                var rTags = [];
                for (var i = 0; i < 5; i++) {
                    rTags.push(faker.lorem.words(1))
                }
                return rTags.join(', ');
            }

            function getFormatedDate() {
                var today = new Date();
                return (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
            }

            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-new-article-form.html',
                link: function ($scope, el, attrs) {
                    $scope.siteSections = [
                        'Политика',
                        'Мы и Деньги',
                        'Культура',
                        'Общество',
                        'Мир'
                    ];
                    $scope.dateMod = '';
                    var author = faker.name.findName();
                    //$scope.article = {
                    //    author: author,
                    //    date: '',
                    //    section: '',
                    //    title: '',
                    //    body: '',
                    //    tags: ''
                    //
                    //}
                    $scope.article = {
                        isDraft: true,
                        img: '',
                        isTopNews: false,
                        author: author,
                        date: getFormatedDate(),
                        section: getRandomSection($scope.siteSections),
                        title: _.startCase(faker.lorem.sentence()),
                        body: faker.lorem.paragraphs(9),
                        tags: getRandomTags()
                    }
                    $scope.setSection = function (section) {
                        $scope.article.section = section;
                        $scope.$broadcast('close:select', {});
                    }
                }
            };
        });
})();
