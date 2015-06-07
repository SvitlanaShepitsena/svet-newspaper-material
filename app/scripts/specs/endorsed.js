'use strict'
describe('editor profile functionality', function () {
    //it('should click on auth btn and open svet-login page', function () {
    //    browser.get('http://localhost:3000/#/home');
    //    element(by.id('authBtn')).click();
    //    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/svet-login');
    //});
    //it('should click on login btn and open svet-login page', function () {
    //    browser.get('http://localhost:3000/#/svet-login');
    //    element(by.id('svetLoginBtn')).click();
    //    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/alexander-etman/dashboard');
    //});
    it('come to login page, login to editor account, open create an article form and check "endorsed by Svet" checkbox', function () {
        browser.get('http://localhost:3000/#/svet-login');
        element(by.id('svetLoginBtn')).click();
        element(by.id('myArticles')).click();
        element(by.id('addNews')).click();
        element(by.tagName('md-checkbox')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/alexander-etman/manage-article/article/');
    });
});