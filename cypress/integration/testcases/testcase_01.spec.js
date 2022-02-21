//Open Cypress Test Runner dashboard:npm run test
/// <reference types="cypress" />
import homePage from '../pageObject/homePage'
const hp = new homePage()
describe('Check the Page Navigation', () => {


  before(() => {
    cy.fixture('testData').then((data) => {
      globalThis.data = data
    })
  })

  before('Visits the URL page', () => {
    hp.visit()

  })

  it.skip('Handling home', () => {

    hp.home()
  })


  it.skip('Handling new Browser Window', () => {
    const pop_url = "https://www.youtube.com/"

    cy.get(':nth-child(3) > .MuiTypography-root > .MuiSvgIcon-root').click()
    // cy.get('@open')
    //.should("be.called", pop_url)
    cy.window().then(win => {
      win.location.href = pop_url
      cy.get('.TqC_a').type('khyati')

    })
  })
  it('Verify Page title', () => {
    hp.getPageTitle().should('contains', 'Qualitest')
  })


  it('visits to  the "Solution" page', () => {
    hp.navigateToSolutionsPage()
  })

  it('checks if "About QA InfoTech" is present on that page', () => {
    hp.checkContent().contains('Our Solutions')
  })




})


