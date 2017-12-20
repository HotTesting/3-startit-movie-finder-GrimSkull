let AbstractPage = require('./AbstractPage.js').AbstractPage

class HomePage extends AbstractPage {
    constructor(url) {
        super()
        this.URL = ''

        this.searchField = $("input[name='searchStr']")
        this.goButton = element(by.buttonText('Go!')) //Button to launch search
        
        this.movieCards = element(by.cssContainingText('movies div', 'Search Results')).$$('movie-card')
    }

    searchForMovie(searchRequest) {
        this.searchField.sendKeys(searchRequest)
        this.goButton.click()
    }    

    getSearchResults() {
        let waitForFirstMovieCard = protractor.ExpectedConditions.visibilityOf(this.movieCards.first())
        browser.wait(waitForFirstMovieCard, 10000, 'First search result is not visible')
        return this.movieCards
    }