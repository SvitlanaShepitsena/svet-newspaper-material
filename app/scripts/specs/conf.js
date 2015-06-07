'use strict'
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome',
        "chromeOptions": {
            binary: 'C:/Users/Andri y/AppData/Local/Google/Chrome SxS/Application/chrome.exe',
            args: [],
            extensions: [],
        }
    },
    getPageTimeout: 1000,
    framework: 'jasmine2',
    specs: ['author-profile.js']
};
