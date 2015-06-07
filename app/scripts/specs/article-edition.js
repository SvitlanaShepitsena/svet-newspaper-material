'use strict'
describe('editor profile functionality', function () {
    it('by opening an article and  editing article form fields, clicking on save bth, then clicking on back to articles link,' +
        ' should find a created article by id of the article with index #0,', function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        element(by.id('myArticles')).click();
        element(by.id('editArticle')).click();
        element(by.tagName('md-select')).click();
        element(by.id('3')).click();
        element(by.id('submitArticle')).click().then(function () {
            element(by.id('linkBack')).click();
        });
        element.all(by.repeater('article in articles')).then(function (articles) {
            var sectionElement = articles[0].element(by.id('authorArticleLinkSection'));
            expect(sectionElement.getText()).toEqual('Chicago');
        });
    });
});