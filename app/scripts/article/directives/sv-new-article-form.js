(function () {
    'use strict';

    angular.module('article')
        .directive('svNewArticleForm', function ($rootScope) {
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
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    $scope.siteSections = [
                        'Политика',
                        'Мы и Деньги',
                        'Культура',
                        'Мир',
                        'Спорт',
                        'Здоровье',
                        'Путешествия'
                    ];
                    $scope.dateMod = '';

                    var author = faker.name.findName();

                    ctrl.article = {
                        isDraft: true,
                        img:'',
                        isTopNews: false,
                        author: author,
                        date: getFormatedDate(),
                        section: getRandomSection($scope.siteSections),
                        title: _.startCase(faker.lorem.sentence()),
                        body: faker.lorem.paragraphs(9),
                        tags: getRandomTags()
                    }

                    $scope.setSection = function (section) {
                        ctrl.article.section = section;
                        $scope.$broadcast('close:select', {});
                    }
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
