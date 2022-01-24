/// <reference types="cypress" />
describe('Verify get Request', function () {
    Cypress.config('baseUrl', 'https://nightly.futurefuel.io')
    /*     it('Validate get request', () => {
            //https://github.com/bahmutov/cy-api
            cy.api({
                url: '/login'
            }).then((response) => {
                expect(response).to.have.property('status', 200)
                expect(response.body).to.not.be.null
            })
    
        })
        it('POST-create', () => {
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
                },
    
            }).its('body')
                .its('data')
                .should('include', {})
        }) */



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


    it.only('Validate get request', () => {
        cy.intercept('POST', 'https://api.nightly.futurefuel.io/api/1/auth/login'
            ,{ fixture: 'loginData.json' }).as('login')


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
