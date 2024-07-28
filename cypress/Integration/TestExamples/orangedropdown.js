///<reference types="@cypress/xpath" />




describe('check box test', () => {
   
    it('dynamic dropdown', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // login 

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()  

        cy.get("a[href='/web/index.php/admin/viewAdminModule']").click()

        cy.get('input[placeholder="Type for hints..."]').type('Golu')


        cy.get('.oxd-autocomplete-dropdown > * > span').each(($el,index,$list)=>{
                if($el.text()==="Golu  Molu") {
                    
                    cy.wrap(($el)).click()

                }


        })


    });

});