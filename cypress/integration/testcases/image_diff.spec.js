describe('Visuals', () => {
   /*  beforeEach(() => {
      cy.viewport(1280, 720)
    })
  
    it('should compare screenshot of the entire page', () => {
      cy.visit('')
      cy.get('[alt="QA InfoTech Logo"]').compareSnapshot()
      //cy.compareSnapshot('wholePage')
    }) */
    it('verify UI across the pages', () =>{
     
        cy.visit('/')
        cy.compareSnapshot('Home Page', {
            capture: 'fullPage'}, { timeout: 30000 }
          )
          
            
    })
 
})

  
