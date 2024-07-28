

//const{eq} = require("cypress/types/lodash");


describe('', () => {
    
    it('orangehrm check attricite', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.document().should("have.property","charset").and("eq","UTF-8")

        cy.title().should("include","OrangeHRM").then((title)=>{

            cy.log(title)
            cy.wait(5000)

        })

        cy.url().should("include","demo").then((url)=>{

            cy.log(url)

            
        }
    )

    });
});