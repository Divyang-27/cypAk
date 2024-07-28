describe('working with tabs and windows', () => {
    it('', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            // invoke() - to remove and attribute 
            // this will remove my target attribute and click on it
            // the link will open in the same tab/window
        cy.get('#opentab').invoke('removeAttr','target').click();

        // since qaclickacedemy is not from the same source/ origin 
        // we have to write a origin() - we have to write one function.

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.contains('Access all our Courses').click()   
            
            cy.log(cy.title()) // this will print the current title


        })

        // whatever i write outside the origin function it will work on the parent window
        cy.log(cy.title()) // this will print the current title



    });
});