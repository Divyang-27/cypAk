///<reference types="@cypress/xpath" />
///<reference types="cypress" />


describe('alert tests', () => {
    it('test case', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click();
        // cypress automatically handles alert by itself.
        cy.get('#checkBoxOption1').click();

        // to fetch the text from the alert 

        cy.on("window:alert",(msg)=>{

            expect(msg).to.eq('Hello , share this practice page and share your knowledge')   
            
            return true; // this will make the alert click on ok

        })


        // click on Confirm alert/popups

        cy.get('#confirmbtn').click()

        cy.on("window:confirm",(msg1)=>{

                expect(msg1).to.eq('Hello , Are you sure you want to confirm?')

                //return true; // this will click on ok
                return false; // this will click on cancel

        })

    });
});