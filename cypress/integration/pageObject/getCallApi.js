class getCallApi{
    getPlaidInfo(){
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
          }).then(res )
        }
}
export default getCallApi