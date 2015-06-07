'use strict'
describe('editor profile functionality', function () {
    it('by clicking at save-changes with an empty field form should show validation messages', function () {
        element(by.id('saveBtn')).click().then(function () {
            var count = element.all(by.css('.tc-red-300.fs-subhead'));
            expect(count.count()).toEqual(5);
        });
    });
})
;