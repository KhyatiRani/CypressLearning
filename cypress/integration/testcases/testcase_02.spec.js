//Open Cypress Test Runner dashboard:npm run test
import homePage from '../pageObject/homePage'
describe('Check the Page Navigation',()=>{
const hp=new homePage()

    before(()=>{
      cy.fixture('testData').then((data)=>
      {
      globalThis.data=data
      })
    })
      before('Visits the URL page', () => {
        hp.visit()
      
      })
      it('Verify Page title',{ tags: '@smoke' },()=>{
        hp.getPageTitle().should('contains','Qualitest')
      })
    
      it('visits to "Industries" page',()=>{
        hp.navigatetoIndustriesPage()
      })
      it('checks if "Functional Testing Services Overview" is present on that page',()=>{
        hp.verifyTheContent().contains('Industries')
      })
    /*   it('visits to "SERVICES" page',()=>{
        hp.navigateToQuotePage()
      })
      it.skip('Gets the input field and inputs text', () => {
        hp.entersTheName(data.firstName,data.lastName)
      })
      it.skip('Select the location from drop down list', () => {
        hp.selectFromDropDownList(data.location)
      })
      it.skip('checks if "Request For Quote" is present on that page',()=>{
        hp.checkThecontent().contains('Request For Quote')
      })  */ 

  
  
     })
   

