describe('Search Field Tests', ()=> {

    let searchField = $('[name = "searchStr"]')
    let movieNameSearch = 'star wars'
    let searchMovieByGenre = 'Horror'
    let movieYearSearch = '2015'
    let searchMovieByActor = 'brad pitt'
    let inputMisspelled = 'pirrates'
    let cyrillicInputSearch = 'маска'
    let randomInputSearch = 'ldjklj'
    let emptyInput = ' '
    let upperCaseInputSearch = "JAWS"
    let specialSymbolsInput = '%?>@#<*+-='
    
    xit('by movie Name', ()=> {
        browser.get('')
                
        searchField.sendKeys(movieNameSearch)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        let title = $$('movie-card').first().$('h4 a').getText().then(text => text.toLowerCase())
        expect(title).toContain(movieNameSearch, 'Movie name does not found')
    })

    xit('by movie Year', ()=> {
        browser.get('')

        searchField.sendKeys(movieYearSearch)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        let year = $$('movie-card').first().$('div p').getText()
        expect(year).toContain(movieYearSearch, 'Does not find movie of such year')
    })

     it('by Genre', ()=> {
        browser.get('')

        searchField.sendKeys(searchMovieByGenre)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        $$('movie-card').first().element(by.linkText('View details »')).click()
        browser.sleep(2000)
        
        let genre = $$('.col-md-8').first().$('p > a')

        expect(element(by.linkText(searchMovieByGenre)).getTagName()).toBe('a', 'This movie is not a horror genre')
        
    })  

     xit('by actor name', ()=> {
        browser.get('')

        searchField.sendKeys(searchMovieByActor)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        // Code below need to be used in case if no one movie found:
        let searchResult = $('div h3').getText().then(text => text.toLowerCase())
        expect(searchResult).toContain('Search Results', 'No matching with search')

        // Code below need to be used in case if some movie will found:
        //element(by.linkText('View details »')).click()
        //browser.sleep(2000)
       
        //expect(element(by.linkText(searchMovieByActor)).getTagName()).toBe('a', 'Johnny Depp do not filmed in this movie')
         
    })
    
    xit('by input misspelled', ()=> {
        browser.get('')
        
        searchField.sendKeys(inputMisspelled)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        let searchResult = $('h3').getText().then(text => text.toLowerCase())
        expect(searchResult).toContain('Search Results', 'no matching with search')
        // How to compare empty search result with expected?
    })

    xit('by cyrillic input', ()=> {
        browser.get('')
        
        searchField.sendKeys(cyrillicInputSearch)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        let searchResult = element(by.linkText('The Mask')).getText()
        expect(searchResult).toContain('The Mask', "'The Mask' movie did not find")
    })

    xit('by random input', ()=> {
        browser.get('')
                
        searchField.sendKeys(randomInputSearch)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        // Below is few examples of my vision for this test case:

        // let searchResult = element(by.binding(randomInputSearch)).getTagName()
        // expect(searchResult).toBe('span, p', 'no matching with search');
        
        //let searchResult = $('.is-flex').getText()
        //expect(searchResult).toContain(randomInputSearch, 'no matching with search')
 
        let searchResult = $('h3').getText()
        expect(searchResult).toContain('Search Results', 'no matching with search')
        // How to compare empty search result with expected?
    }) 

    xit('by empty input', ()=> {
        browser.get('')
                
        searchField.sendKeys(emptyInput)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        // Below is few examples of my vision for this test case:

        // let searchResult = element(by.binding(emptyInput)).getTagName()
        // expect(searchResult).toBe('span, p', 'no matching with search');
        
        //let searchResult = $('.is-flex').getText()
        //expect(searchResult).toContain(emptyInput, 'no matching with search')
 
        let searchResult = $('h3').getText()
        expect(searchResult).toContain('Search Results', 'no matching with search')
        // How to compare empty search result with expected?
    })

    xit('by special symbols input', ()=> {
        browser.get('')
                
        searchField.sendKeys(specialSymbolsInput)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        // Below is few examples of my vision for this test case:

        // let searchResult = element(by.binding(specialSymbolsInput)).getTagName()
        // expect(searchResult).toBe('span, p', 'no matching with search');
        
        //let searchResult = $('.is-flex').getText()
        //expect(searchResult).toContain(specialSymbolsInput, 'no matching with search')
 
        let searchResult = $('h3').getText()
        expect(searchResult).toContain('Search Results', 'no matching with search')
        // The same problem - how to compare empty search result with expected?
    })

    xit('by uppercase input', ()=> {
        browser.get('')
                
        searchField.sendKeys(upperCaseInputSearch)
        element(by.buttonText('Go!')).click()
        browser.sleep(5000)

        let searchResult = element(by.linkText('Jaws')).getText().then(text => text.toUpperCase())
        expect(searchResult).toContain(upperCaseInputSearch, 'Movie do not find')
    })
})