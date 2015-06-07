'use strict'
describe('editor profile functionality', function () {
    beforeAll(function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        browser.waitForAngular();

    });

    beforeEach(function () {

        element(by.id('myArticles')).click().then(function () {

            browser.waitForAngular();
        });


    });

    it('come to login page, login to editor account, open create an article form and check "endorsed by Svet" checkbox', function () {
        element(by.id('addNews')).click();
        element(by.tagName('md-checkbox')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/alexander-etman/manage-article/article/');
    });

    it('by clicking at save-changes with an empty field form should show  5 validation messages', function () {

        element(by.id('addNews')).click();
        element(by.id('saveBtn')).click().then(function () {
            var count = element.all(by.css('.tc-red-300.fs-subhead'));
            expect(count.count()).toEqual(5);
        });
    });


    it('It should save article when all fields filled', function () {
        element(by.id('addNews')).click();
        element(by.tagName('md-select')).click();
        element(by.id('1')).click();

        element(by.model('article.topic')).sendKeys('Test topic');
        element(by.model('article.title')).sendKeys('Test title');
        element(by.model('article.summary')).sendKeys('Test summary');
        element(by.model('html')).sendKeys('Test body');
        element(by.model('article.tags')).sendKeys('Test tags');

        element(by.id('submitArticle')).click().then(function () {
            element(by.id('linkBack')).click();
        });
        element.all(by.repeater('article in articles')).then(function (articles) {
            var titleElement = articles[0].element(by.id('authorArticleLinkTitle'));
            expect(titleElement.getText()).toEqual('Test title');
        });
    });



    it('It should not Save Article twice by clicking save btn sequencially', function () {
        element(by.id('addNews')).click();
        element(by.tagName('md-select')).click();
        element(by.id('1')).click();

        element(by.model('article.topic')).sendKeys('Test topic');
        element(by.model('article.title')).sendKeys('Test title ' + Math.random().toFixed(2));
        element(by.model('article.summary')).sendKeys('Test summary');
        element(by.model('html')).sendKeys('Test body');
        element(by.model('article.tags')).sendKeys('Test tags');

        element(by.id('submitArticle')).click().then(function () {
            element(by.id('submitArticle')).click().then(function () {
                element(by.id('linkBack')).click().then(function () {
                    element.all(by.repeater('article in articles')).then(function (articles) {
                        var titleElement = articles[0].element(by.id('authorArticleLinkTitle'));
                        var titleElement2 = articles[1].element(by.id('authorArticleLinkTitle'));
                        expect(titleElement.getText()).not.toEqual(titleElement2.getText());
                    });
                });

            });
        });
    });

    afterEach(function () {
        //browser.get('http://localhost:3000/#/alexander-etman/articles').then(function () {
        //
        //    browser.waitForAngular();
        //});
    });


});