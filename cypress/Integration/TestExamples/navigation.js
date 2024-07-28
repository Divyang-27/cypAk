///<reference types="@cypress/xpath" />


describe('navigation', () => {
   
    it('navigation commands test', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // login 

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()  


        cy.contains('Admin').click()

        // i want to check whether url contains admin string in it or not

        cy.url().should('include','admin')

        // i want to navigate back

        cy.go('back')

        cy.go('forward')

        // i want to refresh the page
        cy.reload() 

        

    });

});