describe('Test suite ', () => {
    it('navigation commands', () => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // login 

        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()  


        cy.contains('Admin').click()

        // i want to check whether url contains admin string in it or nothav

        cy.url().should('include','admin')
        
        cy.go('back')

        cy.go('forward')




    });


    it('rahul shetty', () => {


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click()

        cy.url().should('include','documents-request')

        cy.go('back') // navigate back

        cy.url().should('include','AutomationPractice')

        cy.go('forward') // navigate forward

        cy.url().should('include','documents-request')

        cy.reload() // reload the webpage
        
    });
});