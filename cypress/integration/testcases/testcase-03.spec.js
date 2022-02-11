//Open Cypress Test Runner dashboard:npm run test
/// <reference types="cypress" />
import homePage from '../pageObject/homePage'
import getCallApi from '../pageObject/getCallApi'
const or = require("../../locators.json")
import promisify from 'cypress-promise'
const hp = new homePage()
const callApi= new getCallApi()
describe('Check the Page Navigation', () => {


  before(() => {
    cy.fixture('testData').then((data) => {
      globalThis.data = data
    })
  })

  it.skip('POST-create', async () => {
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
      await promisify(cy.get('notfound', { timeout: 1000 })).catch(err => {
        expect(err.message).to.contain('Timed out retrying after 1000ms: Expected to find element:')
        return true
      })
    })

    it.skip('assert - given value is an object', () => {
      const employee = {
        name: 'abc',
        age: 1,
      }

      assert.isObject(employee, 'value is object')
    })

  })




  it.only('getting plaid information', async () => {
    callApi.getPlaidInfo()
  })
})







