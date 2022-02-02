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


  it('Validate get request', () => {
  })

    it.only('POST-create',async () => {
      const item = { 'email': 'abc@gmail.com', 'password': 'FuelF@rFuture123' }
      //const header = {"Content-Type": "application/json"}
      //cy.request('POST','https://api.nightly.futurefuel.io/api/1/auth/login', item,header)
      const login = await promisify(cy.api({
        method: 'POST',
        url: 'https://api.nightly.futurefuel.io/api/1/auth/login',

        // baseUrl is prepend to URL
        form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        body: {
          email: 'abc@gmail.com',
          password: 'FuelF@rFuture123',
        },
        headers: {
          'Content-Type': 'application/json'
          // },

          /*   }).its('body')
            .its('data')
            .should('include', {}) */
        },
      }).then(response => response.login)
      )
      
      // all your assertions should be placed here!!
      const cookies = login.headers['set-cookie'];
      // cookies.forEach(cookie => {
      // parse cookies and do what you need with them

      const lo = await promisify(cy.api({
        url: 'https://api.nightly.futurefuel.io/api/1/users/banks',
        headers: {
          'cookie': cookies
        },

        body: { totalpost: 5 }

      }).then(response => response.lo)
      )
       

        //Write Unique ID to a fixture file
        cy.writeFile('cypress/fixtures/resData.json', {
          "response": lo.body
        

      })






      it.skip('should run tests with async/await', async () => {

        /* const Log = await promisify(cy.get('[data-testid="next-btn-login"] > .MuiButton-label'))
    
        expect(body).to.equal('body')*/


      })


      it('should run tests with async/await', async () => {
        //const body = await promisify(cy.get('body'))
        //expect(body).to.be.visible

        const getData = async () => {
          var y = await "Hello World";
          console.log(y);
        }

        console.log(1);
        getData();
        console.log(2);



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







