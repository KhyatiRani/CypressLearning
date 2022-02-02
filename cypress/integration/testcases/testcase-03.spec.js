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



  it.only('POST-create', async () => {

    //"@bahmutov/cy-api": "^1.6.2"
    const login = await promisify(cy.api({
      method: 'POST',
      url: 'https://api.nightly.futurefuel.io/api/1/auth/login',
      body: {
        email: 'abc@gmail.com',
        password: 'FuelF@rFuture123',
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.login)
    )

    console.log('login response', login)
    expect(login).to.have.property('status', 200)
    expect(login.body).to.not.be.null

    const cookies = login.headers['set-cookie'];

    const users = await promisify(cy.api({
      url: 'https://api.nightly.futurefuel.io/api/1/users/banks',
      headers: {
        'cookie': cookies
      }

    }).then(res => res.users)
      //expect(users).to.be.visible
    )

    cy.writeFile('cypress/fixtures/userDetails.json', {
      "response": users.body


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

})







