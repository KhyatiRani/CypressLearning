/// <reference types="cypress" />
describe('Verify get Request', function()  {
    Cypress.config('baseUrl','https://nightly.futurefuel.io')
    it('Validate get request', () => {
        cy.request('/login').then((response) =>{
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
        })

    })
    it('POST-create', () => {
        const item= {'email':'abc@gmail.com','password':'FuelF@rFuture123'}
        //const header = {"Content-Type": "application/json"}
        //cy.request('POST','https://api.nightly.futurefuel.io/api/1/auth/login', item,header)
        cy.request({
            method: 'POST',
            url: 'https://api.nightly.futurefuel.io/api/1/auth/login',
        
            // baseUrl is prepend to URL
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
          body: {
              email: 'abc@gmail.com',
              password: 'FuelF@rFuture123',
            }, 
            headers:{ 
                'Content-Type': 'application/json'
            },
            
        }).its('body')
        .its('data')
        .should('include',{email:'abc@gmail.com'})
}) 

})
