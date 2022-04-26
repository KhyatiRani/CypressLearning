   const or=require("../../locators.json")
   let data=require("../../fixtures/testData.json")
  
   class homePage{

   visit(){
      cy.visit('/')
   }
   home(){
      //https://www.cypress.io/blog/2018/01/16/end-to-end-snapshot-testing/
      cy.contains('Home').click()
      cy.get('[id="nava"]').snapshot()
   
      // let arr=[]
      //console.log('first log')
     //cy.get(or.homePage.toggleIconOpen).click()
     // console.log('2nd log')
     /* cy.get('a').each((al)=>{
      arr.push(al.text)
      }).then(()=>{
         console.log(`log count - ${arr.length}`) 
         console.log(`log text string - ${arr.join(",  ")}`)

      }) */
      
      //cy.get(or.homePage.aboutLink).click()
      //console.log('3rd log')
      //cy.get(or.homePage.teamLink).click()
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
   navigateToSolutionsPage(){
      cy.get(or.homePage.toggleIconOpen).click()
      cy.get('#menu-item-17007 > [href="https://qualitestgroup.com/our-solutions/"]').click()
     /*  cy.get('#menu-item-673 > [href="#"]').click()
      .then(() => {
         console.log("This is to check the log")  // Log to check the async behaviour
     }); */
      console.log('checking the log')
      //cy.contains('Team').click()
      //cy.get('img').should('have.attr', 'class').should('include','custom-logo lazy loaded')
     
   }
   checkContent(){
     return  cy.get('body')
   }
   navigatetoIndustriesPage(){
      cy.get(or.homePage.toggleIconOpen).click()
      cy.get('#menu-item-1369 > [href="#"]').click()
      cy.get('#menu-item-6118 > a').click()
   }
   verifyTheContent(){
      return cy.get('body')
   }
   navigateToQuotePage(){
      cy.get(or.homePage.toggleIconOpen).click()
      cy.get('#menu-item-6702 > [href="#"]').click()
   }

}
   export default homePage