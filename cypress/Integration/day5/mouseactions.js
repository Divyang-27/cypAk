describe('mouse actions', () => {
    it.skip('hover test', () => {
        

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    });

    it.skip('trigger', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').trigger('mouseover')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

        
    });

    it('right click test', () => {
        
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath("//*[.='right click me']").rightclick();
    });       

    it('double click test', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath('//button').dblclick()



        
    });


});