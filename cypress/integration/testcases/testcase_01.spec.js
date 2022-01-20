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
      it('Verify Page title',()=>{
        hp.getPageTitle().should('contains','QA')
      })
       it('visits to  the "ABOUT" page',()=>{
        hp.navigateToAboutPage()
      })

      it('checks if "About QA InfoTech" is present on that page',()=>{
        hp.checkContent().contains('About QA InfoTech')
      })
    
     
  
  
     })
   

