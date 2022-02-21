describe('my tests', () => {
  it('works', () => {
    cy.log('first snapshot')
    cy.wrap({ foo: 42 }).snapshot()
    cy.log('second snapshot')
    cy.wrap({ bar: 101 }).snapshot()
  })
})

describe('focused input field', () => {
  it('is empty and then typed into', () => {
    cy.visit('https://qualitestgroup.com/')
      cy.get('#qualitest_logo').snapshot({
        name: 'human snapshot name' // to use in the snapshot file
        //json: false                  // convert DOM elements into JSON
                                     // when storing in the snapshot file
      })
  })
})






//describe('Visuals', () => {
  /* beforeEach(() => {
    cy.viewport(1280, 720)
  }) */

      
    
  

    

/* it('should compare screenshot of the entire page', () => {
  cy.visit('')
  cy.get('[alt="QA InfoTech Logo"]').compareSnapshot()
  //cy.compareSnapshot('wholePage')
}) 
it('verify UI across the pages', () =>{
 
    cy.visit('/')
    cy.compareSnapshot('Home Page', {
        capture: 'fullPage'}, { timeout: 30000 }
      )
      
        
})*/


//})




// type definitions for Cypress object "cy"
// <reference types="cypress" />

/* const availablefixtures = [
  {
      "name": "loginData",
      "context": "1"
  },
  {
      "name": "loginData2",
      "context": "2"
  }
]

describe('Automation Test Suite - Fixtures', () => {
  //loop through both the fixtues 
  availablefixtures.forEach((afixture) => {
  describe(afixture.context, () => {
  //Mostly used for Setup Part
  before(function(){ 
    cy.fixture(afixture.name).then(function(data)
    {
        this.data=data ;
    })
    })
  //Calling
 
  it.only("Sample test case of login", function () {
    cy.visit('https://nightly.futurefuel.io/login')
    //cy.fixture('loginData').then((user) => {
      cy.get('#email-2').type(this.data.name)
      cy.get('#password-3').type(this.data.password)
     })
  
    //cy.get("input[name='ctl00$CPHContainer$btnLoginn']").click()
  })
})
})

 */