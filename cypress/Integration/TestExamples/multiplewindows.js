///<reference types="@cypress/xpath" />


describe('rs test', () => {
   
    it('multiple windows', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // cypress does not support multiple windows and tabs.


        // logic here is - if we remove the tarfet attribite from DOM
        // then the new link will be opened in the same window
        cy.get('#openwindow').invoke('removeAttr','target').click()

        cy.contains('Contact').click({force:true})

        
    });
});