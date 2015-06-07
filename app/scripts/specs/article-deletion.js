'use strict'
describe('editor profile functionality', function () {
    it('by opening a list of articles,' +
        'should find last added article and delete it,', function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        element(by.id('myArticles')).click();
        element.all(by.repeater('article in articles')).then(function (articles) {
            articles[0].element(by.id('deleteArticle')).click().then(function () {
                element(by.id('confDelBtn')).click().then(function () {
                    element.all(by.repeater('article in articles')).then(function (articles) {
                        var titleElement = articles[0].element(by.id('authorArticleLinkSection'));
                        expect(titleElement.getText()).not.toContain('Test Title');
                    });
                });
            });
        });
    });
});