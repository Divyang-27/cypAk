describe('', () => {
    it('google', () => {
        
        cy.visit('https://www.google.co.in/')

        cy.xpath("//textarea[@name='q']").type('Masai{enter}')

        cy.scrollTo(0,1000)

        cy.wait(2000)

        cy.scrollTo(0,-1000)

        cy.wait(2000)

        cy.contains('Maasai people').scrollIntoView().click()

    });
});