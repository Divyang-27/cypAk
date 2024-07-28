///<reference types="@cypress/xpath" />


describe('test suite', () => {
    it('orangetest', () => {
        
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            //cy.get("input[name='username']").type('Admin');

            cy.xpath("//input[@name='username']").type('Admin')

           // cy.get("input[name='password']").type('admin123');


           cy.xpath("//input[@type='password']").type('admin123')

            //cy.get(".orangehrm-login-button").click();


            cy.xpath("//button[@type='submit']").click();
            cy.wait(2000);

           // cy.contains('Login').click();

            // contains will search for the text on the element and then it will click on it.
            cy.contains('Admin').click();


    });

    it('Logout operation', () => {



        
    });


});