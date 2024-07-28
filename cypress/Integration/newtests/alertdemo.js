
describe('alert', () => {
    it('', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#alertbtn').click();

        cy.on("window:alert",(msg)=>{

            expect(msg).to.eq('Hello , share this practice page and share your knowledge')

            return true;
        })

    });

    it('conform alert', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#confirmbtn').click();

        cy.on("window:confirm",(msg)=>{

            expect(msg).to.eq('Hello , Are you sure you want to confirm?')

            return true;
        })


    });
});