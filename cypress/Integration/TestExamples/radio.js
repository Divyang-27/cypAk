///<reference types="@cypress/xpath" />


describe('rs test', () => {
   
    it('radio button', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("[value='radio1']").click()


        // login 

       
    });


    it('hide/show', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get("#displayed-text").should("be.visible")

        cy.get("#hide-textbox").click()

        cy.get("#displayed-text").should("not.be.visible")

        cy.get("#show-textbox").click()

        cy.get("#displayed-text").should("be.visible")







    });

});