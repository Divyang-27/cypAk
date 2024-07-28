///<reference types="cypress-iframe" />

describe('frames', () => {
    it('frame test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        
        // this method is used to work with the frame and it
        // will take the locator of the frame as arguement
        cy.frameLoaded('#courses-iframe'); 

        cy.iframe().contains('Blog').click();

    });
});