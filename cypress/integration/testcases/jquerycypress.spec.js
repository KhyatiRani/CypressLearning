/// <reference types="Cypress" />
import {recurse} from 'cypress-recurse'


describe('JQuery and Cypress Test Case', function () {

    it('Performing JQuery Operation', function () {
        cy.visit("https://accounts.google.com");
      /*   cy.request('https://demoqa.com/').get(':nth-child(1) > :nth-child(1) > .card-body > h5').then(function(e){
            Cypress.$(e).find('h5')
            const t = e.text()
            cy.log(t)
         }) */
        cy.request("https://accounts.google.com")
          .its('body')
          .then(html => {
            const titleHomePage = Cypress.$(html).find('headingText').text();
            cy.log('Title of Page is: ' + titleHomePage);
          })
        })

      it('Scenario 1', function (){
        // test step to launch a URL
        cy.visit("https://accounts.google.com")
        // access web element with Cypress.$
        cy.request('https://accounts.google.com').get('h1#headingText').then(function(e){
           Cypress.$(e).find('span')
           const t = e.text()
           cy.log(t)
        })
     })



     it.only('Pagination using recursion', function (){
      // launch URL
      cy.visit("https://www.amazon.in/");
cy.wait(3000)

      cy.reload()
      // show hidden element with invoke
      //cy.get('#nav-flyout-ya-signin')
      //click hidden element
      //cy.contains('Sign').click();
     /*  recurse(
        ()=>cy.get('.a-carousel-right > .a-button > .a-button-inner'),
        ($next) => $next.hasClass('disabled'),
        {
          post(){
            cy.get('.a-carousel-right > .a-button > .a-button-inner').click()
          }
        } */
      }
      )
      
   })
  