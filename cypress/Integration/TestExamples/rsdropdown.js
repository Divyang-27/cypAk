///<reference types="@cypress/xpath" />


describe('check box test', () => {
   
    it('checkbox test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('select').select('option2')


        // to check multiple checkboxes

        cy.get("[type='checkbox']").check(['option1','option2'])


    });

    it.only('dynamic dropdown', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item').each(($el,index,$list)=>{
                if ($el.text=="India") {
                    
                    cy.wrap(($el)).click()

                }


        })


    });

});