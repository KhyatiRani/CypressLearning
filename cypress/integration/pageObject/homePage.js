   const or=require("../../locators.json")
   let data=require("../../fixtures/testData.json")
  
   class homePage{

   visit(){
      cy.visit('/')
      // let arr=[]
      console.log('first log')
     cy.get(or.homePage.toggleIconOpen).click()
      console.log('2nd log')
     /* cy.get('a').each((al)=>{
      arr.push(al.text)
      }).then(()=>{
         console.log(`log count - ${arr.length}`) 
         console.log(`log text string - ${arr.join(",  ")}`)

      }) */
      
      cy.get(or.homePage.aboutLink).click()
      console.log('3rd log')
      cy.get(or.homePage.teamLink).click()
      //cy.get('.custom-logo')
      //cy.compareSnapshot('home-page')
      //cy.get('[alt="QA InfoTech Logo"]').compareSnapshot('logo')
     // cy.get('[id="nava"]').compareSnapshot()
         
      
      //cy.viewport(320, 480)
      //cy.viewport('iphone-5')
    
     // cy.get('img').should('have.attr', 'alt').should('include','QA InfoTech Logo')
     
      //;[cy.get('[alt="QA InfoTech Logo"]').should('have.attr', 'href', '/Updated_QAIT_logo-1.png')
     /*  cy.log("Launching the URL")
      cy.writeFile('cypress/fixtures/test2.json', { name: "John", age: 25 })
      cy.readFile('cypress/fixtures/test2.json').its('name').should('eq', 'John') 
      cy.document().its("contentType").should("eq", "text/html");
      //checking whether the document is in text/html format
      cy.document().should("have.property", "charset").and("eq", "UTF-8"); */
     // cy.get('[alt="QA InfoTech Logo"]')
     
     //cy.get('[alt="QA InfoTech Logo"]').compareSnapshot()
      //cy.get('[alt="QA InfoTech Logo"]').compareSnapshot('logo',0.1)
      //cy.get('[id="nava"]').compareSnapshot()
    
      }
   getPageTitle(){
      return cy.title()
   }
   navigateToAboutPage(){
      cy.get(or.homePage.toggleIconOpen).click()
      cy.get(or.homePage.aboutLink).click()
      cy.get(or.homePage.teamLink).click()
      .then(() => {
         console.log("This is to check the log")  // Log to check the async behaviour
     });
      console.log('checking the log')
      //cy.contains('Team').click()
      //cy.get('img').should('have.attr', 'class').should('include','custom-logo lazy loaded')
     
   }
   checkContent(){
     return  cy.get(or.homePage.teamsPage)
   }
   navigatetoServicesPage(){
      cy.get(or.homePage.toggleIconOpen).click()
      cy.get(or.homePage.servicesLink).click()
      cy.get(or.homePage.functionalTestingLink).click()
   }
   verifyTheContent(){
      return cy.get(or.homePage.functionalPage)
   }
   navigateToQuotePage(){
      cy.get(or.homePage.toggleIconOpen).click()
      cy.get(or.homePage.quoteLink).click()
   }
   entersTheName(firstName,lastName){
      cy.get(or.homePage.firstNameField).type(firstName); 
      cy.get(or.homePage.lastNameField).type(lastName)
   }
   selectFromDropDownList(location){
      cy.get(or.homePage.locationDropDown).select(location) 
   }
   checkThecontent(){
      return cy.get(or.homePage.quotePage)
   }
}
   export default homePage