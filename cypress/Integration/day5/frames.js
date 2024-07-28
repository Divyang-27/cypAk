///<reference types="@cypress/xpath" />
///<reference types="Cypress" />
///<reference types="cypress-iframe" />

describe('shetty', () => {
    it('frame test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')

        cy.iframe().contains('Blog').click();

    });
});