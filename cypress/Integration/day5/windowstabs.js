describe('multiple windows and tabs suite', () => {
    it.skip('first test- verify href attribute in a link', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').should('have.attr','href').and('include','qaclickacademy');


    });


    // cypress does not support switch windows.

    it.skip('', () => {// if the link if of different origin , then use origin.
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').should('have.attr','href').and('include','qaclickacademy').invoke('removeAttr','target').click(); // this is workaround to handle multiple windows

        cy.origin('https://www.qaclickacademy.com/',()=>{

        cy.visit('/')
        cy.contains("Access all our Courses").click();
        cy.log(cy.title())

        })
    
        cy.log(cy.title())

    });

    it.only('window test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#openwindow').invoke('removeAttr','onclick').click(); // this is workaround to handle multiple windows

        cy.origin('https://www.qaclickacademy.com/',()=>{

        cy.visit('/') // to make cypress change its origin from rahulshetty to qaclickacademy
        cy.contains("Access all our Courses").click();
        cy.log(cy.title())

        })
    
        cy.log(cy.title())


        
    });
});