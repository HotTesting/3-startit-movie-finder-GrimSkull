module.exports.config = {
    specs: ['test-cases/searchTests.js'],
    directConnect: true,
    baseUrl: 'https://movies-finder.firebaseapp.com/',

    onPrepare:() => {
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());

        beforeEach( () => {
        //Here will be preconditions, like a launching browser before each test case starts
            browser.get('')        
        })

        afterEach( () => {
            browser.get('/')
            browser.executeScript('window.sessionStorage.clear();')
            browser.executeScript('window.localStorage.clear();')
            browser.manage().deleteAllCookies()
        })
    },    
}