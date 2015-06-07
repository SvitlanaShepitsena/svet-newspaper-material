'use strict'
describe('editor profile functionality', function () {
    it('by clicking at save-changes with an empty field form shouls show validation messages', function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        element(by.id('myArticles')).click();
        element(by.id('addNews')).click();

        element(by.id('saveBtn')).click().then(function () {

            var count = element.all(by.css('.tc-red-300.fs-subhead'));
            expect(count.count()).toEqual(5);


        });


    });
})
;