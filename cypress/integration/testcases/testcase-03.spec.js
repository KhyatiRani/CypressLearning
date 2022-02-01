//Open Cypress Test Runner dashboard:npm run test
/// <reference types="cypress" />
import homePage from '../pageObject/homePage'
const or = require("../../locators.json")
import promisify from 'cypress-promise'
const hp = new homePage()
describe('Check the Page Navigation', () => {


  before(() => {
    cy.fixture('testData').then((data) => {
      globalThis.data = data
    })
  })

  before('Visits the URL page', () => {
    cy.visit('https://nightly.futurefuel.io')

  })

  it.skip('should run tests with async/await', async () => {

    /* const Log = await promisify(cy.get('[data-testid="next-btn-login"] > .MuiButton-label'))

    expect(body).to.equal('body')*/
   
  }) 


  it('should run tests with async/await', async () => {
    //const body = await promisify(cy.get('body'))
    //expect(body).to.be.visible

    await promisify(cy.get('notfound', { timeout: 1000 })).catch(err => {
     expect(err.message).to.contain('Timed out retrying after 1000ms: Expected to find element:')
    return true
    })
  })

  it('assert - given value is an object', () => {
    const employee = {
      name: 'abc',
      age: 1,
    }

    assert.isObject(employee, 'value is object')
  })

})







