'use strict'
describe('editor profile functionality', function () {
    it('by opening an article and  editing article section name, clicking on save bth, then clicking on back to articles link,' +
        ' should find an edited article section by id and get expected text,', function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        element(by.id('myArticles')).click();
        element.all(by.repeater('article in articles')).then(function (articles) {
            articles[1].element(by.id('editArticle')).click().then(function () {
                element(by.tagName('md-select')).click();
                element(by.id('0')).click();
            });
        });
        element(by.id('saveBtn')).click().then(function () {
            element(by.id('linkBack')).click().then(function () {
                element.all(by.repeater('article in articles')).then(function (articles) {
                    var sectionElement = articles[1].element(by.id('authorArticleLinkSection'));
                    expect(sectionElement.getText()).toEqual('Art');
                });
            });
        });
    });
});