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
      it.only('Verify Page title',()=>{
        hp.getPageTitle().should('contains','QA')
      })
       it('visits to  the "ABOUT" page',()=>{
        hp.navigateToAboutPage()
      })

      it('checks if "About QA InfoTech" is present on that page',()=>{
        hp.checkContent().contains('About QA InfoTech')
      })
    
      it('visits to "SERVICES" page',()=>{
        hp.navigatetoServicesPage()
      })
      it('checks if "Functional Testing Services Overview" is present on that page',()=>{
        hp.verifyTheContent().contains('Functional Testing Services Overview')
      })
      it('visits to "SERVICES" page',()=>{
        hp.navigateToQuotePage()
      })
      it('Gets the input field and inputs text', () => {
        hp.entersTheName(data.firstName,data.lastName)
      })
      it('Select the location from drop down list', () => {
        hp.selectFromDropDownList(data.location)
      })
      it('checks if "Request For Quote" is present on that page',()=>{
        hp.checkThecontent().contains('Request For Quote')
      })  

  
  
     })
   

