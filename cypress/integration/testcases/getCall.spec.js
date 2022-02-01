/// <reference types="cypress" />
describe('Verify get Request', function () {
    Cypress.config('baseUrl', 'https://nightly.futurefuel.io')
    it('Validate get request', () => {
        //https://github.com/bahmutov/cy-api
        cy.api({
            url: '/login'
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null

        })

    })
    it.only('POST-create', () => {
        const item = { 'email': 'abc@gmail.com', 'password': 'FuelF@rFuture123' }
        //const header = {"Content-Type": "application/json"}
        //cy.request('POST','https://api.nightly.futurefuel.io/api/1/auth/login', item,header)
        cy.api({
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
        }).then((response) => {
            // all your assertions should be placed here!!
            const cookies = response.headers['set-cookie'];
            // cookies.forEach(cookie => {
            // parse cookies and do what you need with them

            cy.api({
                url: 'https://api.nightly.futurefuel.io/api/1/users/banks',
                headers: {
                    'cookie': cookies
                },

                body:{totalpost:5}

            }).then((res1) => {
                expect(res1).to.have.property('status', 200)
                expect(res1.body).to.not.be.null

                //Write Unique ID to a fixture file
                cy.writeFile('cypress/fixtures/resData.json', {
                    "response": res1.body
                })

            })
            cy.api({
                method: 'POST',
                url: 'https://api.nightly.futurefuel.io/api/1/plaid/link-token',

                // baseUrl is prepend to URL
                form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
                body: {
                    products: ['transactions'],
                    linkCustomizationName: 'spending',
                },
                headers: {
                    'Content-Type': 'application/json',

                    'cookie': cookies
                },

                /*  }).its('body')
                     .its('data')
                     .should('include', {}) */



            }).then((response1) => {
                expect(response1).to.have.property('status', 200)
                expect(response1.body).to.not.be.null


                cy.writeFile('cypress/fixtures/responseData.json', {
                    "response2": response1.body
                })
            })

            //cy.log(JSON.stringify(response.body))


            it('Validate get request', () => {
                cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/auth/login'
                    , (req) => {
                        req.body = {
                            email: 'abc@gmail.com',
                            password: 'FuelF@rFuture123',
                        }
                        req.headers['Content-Type'] = 'application/json'
                    }).as('login')


                cy.visit('/')
                cy.get('[name="email"]').clear().type('abc@gmail.com')
                cy.get('[name="password"]').clear().type('FuelF@rFuture123')
                cy.get('[data-testid="next-btn-login"] > .MuiButton-label').click()

                //cy.wait('@login')
                cy.wait('@login').then((interception) => {
                    cy.log(interception.id)
                    cy.log(interception.state)
                    cy.log('status code is: ' + interception.response.statusCode)
                    cy.log('response body is: ' + interception.response.body)

                    expect(interception.response.statusCode).to.eq(200)
                })

            })


            it('Validate get request', () => {
                cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/auth/login'
                    , { fixture: 'loginData.json' }).as('login')


                cy.visit('/')
                cy.get('[name="email"]').clear().type('abc@gmail.com')
                cy.get('[name="password"]').clear().type('FuelF@rFuture123')
                cy.get('[data-testid="next-btn-login"] > .MuiButton-label').click()

                //cy.wait('@login')
                cy.wait('@login').then((interception) => {
                    cy.log(interception.id)
                    cy.log(interception.state)
                    cy.log('status code is: ' + interception.response.statusCode)
                    cy.log('response body is: ' + interception.response.body)

                    expect(interception.response.statusCode).to.eq(200)
                })

            })

            it('Validate get request for Roll Up module', () => {
                cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/loan-portfolios/1ec7d8ea-e93c-67c4-b81b-0a64d1216297/loan-accounts'
  ,).as('rollup')


                cy.visit('/')
                cy.get('[name="email"]').clear().type('abc@gmail.com')
                cy.get('[name="password"]').clear().type('FuelF@rFuture123')
                cy.get('[data-testid="next-btn-login"] > .MuiButton-label').click()

                //cy.wait('@login')
                cy.wait('@login').then((interception) => {
                    cy.log(interception.id)
                    cy.log(interception.state)
                    cy.log('status code is: ' + interception.response.statusCode)
                    cy.log('response body is: ' + interception.response.body)

                    expect(interception.response.statusCode).to.eq(200)
                })

            })


        })

    })
})


