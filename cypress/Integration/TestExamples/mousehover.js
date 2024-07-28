///<reference types="@cypress/xpath" />


describe('rs test', () => {
   
    it('mousehover', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show')

        // if the element is hidden,cypress can click on the hidden elements also using force : true inside click()

        cy.contains('Top').click({force:true}) 

        cy.url().should('include','top')
       
    });
});