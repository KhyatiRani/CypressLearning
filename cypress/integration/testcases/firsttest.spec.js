describe('Check the Page Navigation',()=>{

   before("Visits the URL", () => {
      cy.visit('https://qainfotech.com/')
    
    })
    it('Verify Page title',()=>{
       cy.title().should('contains','QA')
    })
 

    it('visits to  the "ABOUT" page',()=>{
      cy.get('.toggle-icon-open').click()
      cy.get('#cmm4e-menu-item-2123 > [href="#"]').click()
      cy.get('#cmm4e-menu-item-13637 > .cmm4e-nav-link> .cmm4e-item-label').click()
   })
   it('checks if "About QA InfoTech" is present on that page',()=>{
      cy.contains('About QA InfoTech')
   })
  
   it('visits to "SERVICES" page',()=>{
      cy.get('.toggle-icon-open').click()
      cy.get(' #cmm4e-menu-item-10382 > .cmm4e-nav-link > .cmm4e-item-label').click()
      cy.get('.elementor-element-2ac9006c > .elementor-widget-container > div > .header-ul > :nth-child(1) > .elementor-item').click()
   })
   it('checks if "Functional Testing Services Overview" is present on that page',()=>{
      cy.contains('Functional Testing Services Overview')
   })

   it("Gets the input field and inputs text", () => {
      cy.get('#firstname-a1548b0e-b404-4da3-ad8c-873f62ff7bbd').type('abc'); 
   })
   it("Select the location from drop down list", () => {
   cy.get('#location-a1548b0e-b404-4da3-ad8c-873f62ff7bbd').select('Asia') 
    })

    it('visits to "SERVICES" page',()=>{
      cy.get('.toggle-icon-open').click()
      cy.get(' .main-menu-quote').click()
   })
   it('checks if " Request For Quote" is present on that page',()=>{
      cy.contains(' Request For Quote')
   })


   })
 