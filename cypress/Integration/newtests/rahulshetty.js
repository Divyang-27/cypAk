describe('shetty tests', () => {
    it('checkbox test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
 
        // the below code will check and add assertion whether it is checked and multiple assertion
        // with checking whether it is having value option1 and
        cy.get('#checkBoxOption1').check().should("be.checked").and("have.value","option1").and("have.attr","name","checkBoxOption1");

        cy.get('#checkBoxOption1').uncheck().should("not.be.checked");

        cy.wait(2000)
        // this below code will check on all the checkbox based on the value attrivutes.
        cy.get("input[type='checkbox']").check(['option1','option2','option3']);

    });



it.only('radio button', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get("[for='radio1'] > .radioButton").check().should('be.checked').and('have.value','radio1')
    //cy.get('input[value="radio1"]').check().should("be.checked").and("have.value","radio1")
    
});


it('dropdown', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#dropdown-class-example').select('option3').should("have.value","option3");
});


it.only('dynamic dropdown', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#autocomplete').type('IND')
    cy.get('.ui-menu-item div').each(($el, index ,$list)=>{

        if($el.text()=='India'){

                cy.wrap($el).click();

        }

    })
    
});

});