//Open Cypress Test Runner dashboard:npm run test
/// <reference types="cypress" />
import getCallApi from '../pageObject/getCallApi'
const or = require("../../locators.json")
import promisify from 'cypress-promise'
const callApi= new getCallApi()
describe('Cypress API services', () => {

  it.only('getting plaid information', async () => {

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
    const plaidinfo = await promisify(cy.api({
        method: 'POST',
        url: 'https://api.nightly.futurefuel.io/api/1/bank-portfolios',
        headers: {
            'cookie': cookies
        },
        body: {
          plaid_institution_id: 'ins_5'
        },
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.plaidinfo)
      //expect(users).to.be.visible
    )

    cy.writeFile('cypress/fixtures/userDetails.json', {
      "response": plaidinfo.body
    })
      
  })
})







