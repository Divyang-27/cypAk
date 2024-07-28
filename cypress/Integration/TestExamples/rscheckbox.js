///<reference types="@cypress/xpath" />


describe('check box test', () => {
   
    it('checkbox test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // to check multiple checkboxes

        cy.get("[@type='checkbox']").check(['option1','option2'])


    });

});