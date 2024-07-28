///<reference types="@cypress/xpath" />
///<reference types="cypress" />


describe('mouse actions test', () => {
    it('mouse test', () => {

        cy.visit('https://demoqa.com/buttons')


        //cy.contains('Double click button')

        cy.get('#doubleClickBtn').dblclick();

        cy.get('#rightClickBtn').rightclick();

        
    });
});