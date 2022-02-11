/// <reference types="cypress" />
/// <reference types="cypress-downloadfile"/>
describe('Verify get Request', function () {
    Cypress.config('baseUrl', 'https://nightly.futurefuel.io')


    const add = (a, b) => a + b
    it.skip('adds numbers', () => {
      cy.wrap(add(2, 3)).snapshot()

      cy.wrap(add(1, 19)).snapshot()

    }) 


    it.skip('File download',() =>{
        cy.downloadFile('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg','cypress/downloads','demoFile.jpg')
        cy.verifyDownload('demoFile.jpg')


    })


    it('Validate get request', () => {
        //https://github.com/bahmutov/cy-api
        cy.api({
            url: '/login'
        }).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null

        })

    })
    it('POST-create', () => {
        //const item = { 'email': 'abc@gmail.com', 'password': 'FuelF@rFuture123' }
        cy.api({
            method: 'POST',
            url: 'https://api.nightly.futurefuel.io/api/1/auth/login',

            body: {
                email: 'abc@gmail.com',
                password: 'FuelF@rFuture123',
            },
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            const cookies = response.headers['set-cookie'];


            cy.api({
                url: 'https://api.nightly.futurefuel.io/api/1/users/banks',
                headers: {
                    'cookie': cookies
                },

                body: { totalpost: 5 }

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
                body: {
                    products: ['transactions'],
                    linkCustomizationName: 'spending',
                },
                headers: {
                    'Content-Type': 'application/json',

                    'cookie': cookies
                },

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
                cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/auth/logi'
  ,).as('login')


                cy.visit('/')
                //cy.get('[name="email"]').clear().type('abc@gmail.com')
                //cy.get('[name="password"]').clear().type('FuelF@rFuture123')
                //cy.get('[data-testid="next-btn-login"] > .MuiButton-label').click()

                //cy.wait('@login')
                cy.wait('@login').then((xhr) => {
                  /*   cy.log(interception.id)
                    cy.log(interception.state)
                    cy.log('status code is: ' + interception.response.statusCode)
                    cy.log('response body is: ' + interception.response.body)

                    expect(interception.response.statusCode).to.eq(200) */
                    if(xhr.status === 200) {
                        // Code to test when status is 200
                    } else if(xhr.status === 400) {
                        // Code to test when status is 400
                    } else {
                        // Code to test when status is none of the above.
                    }


                })

            })


        })

    })
})


