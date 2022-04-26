//Open Cypress Test Runner dashboard:npm run test
/// <reference types="cypress" />
import getCallApi from '../pageObject/getCallApi'
//import user from '../fixtures/loginData2.json'
const or = require("../../locators.json")
import promisify from 'cypress-promise'
const callApi = new getCallApi()
describe('Cypress API services', () => {

  before(() => {
    cy.fixture('loginData2').then((data) => {
      globalThis.data = data
    })
  })

  it.only('getting plaid information',async() => {

    const login = await promisify(cy.api({
      method: 'POST',
      url: 'https://api.nightly.futurefuel.io/api/1/auth/login',
      //body: data,
       body: {
        email: data.email,
        password: data.password,
    }, 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.login)
    )
      expect(login).to.have.property('status', 200)
      expect(login.body).to.not.be.null

      //Write Unique ID to a fixture file
      cy.writeFile('cypress/fixtures/resData.json', {
          "response": login.body
      })
    })
  })

