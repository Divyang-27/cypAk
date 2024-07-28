describe('RS Testsuite', () => {
    it.skip('checkbox test', () => {
        

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


            // in cypress check() to work with checkboxes/ radio buttons.

            // Assertions chaining - using and()
            cy.get("#checkBoxOption1").check().should('have.value','option1').and('have.attr','name','checkBoxOption1');

            cy.get("#checkBoxOption2").check().should('have.id','checkBoxOption2').and('not.have.class').should('be.checked');

    });

    // only will make cypress to execute the only method 
it.skip('multiple checks test', () => {
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // check() will automatically take value attribute and check on the specifies values

    // we have to mention the values in [] 
    cy.get("input[type='checkbox']").check(['option1','option2','option3']).should('be.checked')

    // unchecck the checkbox using uncheck()

    //assertion for unchecking is not be checked
    cy.get("input[type='checkbox']").uncheck('option3').should('not.be.checked')



});


it.skip('radio test', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get("[for='radio2'] > [value='radio2']").check().should('have.value','radio2')




});


it('dropdown test - select by value', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

// to select a dropdown , just use select method and mention the value of select
    cy.get("#dropdown-class-example").select('option3').should('have.value','option3')
    cy.get("#dropdown-class-example").select('option2').should('have.value','option2')



});

it('select by index', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // indexing alwasys starts from 0
    cy.get("#dropdown-class-example").select(1).should('have.value','option1') 
    cy.get("#dropdown-class-example").select(2).should('have.value','option2') 
    cy.get("#dropdown-class-example").select(3).should('have.value','option3')
    cy.get("#dropdown-class-example").select(0).should('have.value','') 




});

it('select by text', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#dropdown-class-example").select('Option3').should('have.value','option3') 
    cy.get("#dropdown-class-example").select('Option2').should('have.value','option2') 
    cy.get("#dropdown-class-example").select('Option1').should('have.value','option1') 
    cy.get("#dropdown-class-example").select('Select').should('have.value','')

    
});


it('Dynamic dropdown/ suggestion class test', () => {
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get(".ui-autocomplete-input").type('ja')

    //using each , we are  iterating through the elements used in get()
    //and using callback func to check for the text and then clicking on the matching text

    cy.get('.ui-menu-item-wrapper').each(($el,index,$list)=>{

        if($el.text()=='Japan'){

            // cy.wrap is used to convert the jquery element into cypress object.
                cy.wrap($el).click();

        } // if block ends

    }) // callback function ends
}); // it  - test case ends 

it.only('dynamic dropdown - direct click test', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get(".ui-autocomplete-input").type('us')

    cy.xpath("//div[.='Cyprus' and @class='ui-menu-item-wrapper']").click();

    
});


});