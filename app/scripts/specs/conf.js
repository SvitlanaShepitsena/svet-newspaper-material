'use strict'
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome',
        "chromeOptions": {
            binary:"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            args: [],
            extensions: [],
        }
    },
    specs: ['article-form-validation.js']
};
