
describe('Test suite - facebook - collection of test cases', () => {
    it('login test', () => {


            // passing the url
            cy.visit('https://www.facebook.com/');
            
            // we have to enter username

            cy.get("input[name='email']").type('joker')
            //cy.get('#email').type('akshay')

            // we have to enter password

            cy.get("input[type='password']").type('password');


            //cy.get('#pass').type('1234abcd');


            cy.get("#loginbutton").click()

            //cy.wait(5000);
        
    });
});
