///<reference types="@cypress/xpath" />
///<reference types="cypress" />

describe('Google scroll', () => {
    it('scroll test', () => {
        
        cy.visit('https://www.google.co.in/')

        cy.xpath("//textarea[@title='Search']").type('Masai{enter}') // it will click on enter

        cy.wait(2000)

        // scrolling downwards

        cy.scrollTo(0,2000)

        cy.wait(2000)

        // scroll upwards
        cy.scrollTo(0,-2000)

        //cy.contains('All New Arrivals - Masai Clothing Company').scrollIntoView().click()

        cy.contains('Maasai people').scrollIntoView().click();

        cy.wait(2000)










    });
});