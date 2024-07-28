///<reference types="@cypress/xpath" />
///<reference types="Cypress" />


describe('handling visible and invisible elements', () => {
    it('hide/ show test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // this will type cypress and then assert whether it is visible
        cy.get('#displayed-text').type('Cypress ').should('be.visible');

        cy.get('#hide-textbox').click();
        // the element should hide now.

        // this will assert that the element is invisible
        cy.get('#displayed-text').should('not.be.visible')

        // clicking on show
        cy.get('#show-textbox').click();

        // again checking for visible condition.
        cy.get('#displayed-text').type(' practice').should('be.visible');

    });
});