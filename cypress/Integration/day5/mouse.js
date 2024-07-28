///<reference types="@cypress/xpath" />
///<reference types="Cypress" />


describe('mouse actions', () => {
    it('mouse hover 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show') // this will hover the mouse

        cy.contains('Top').click({force:true}) // this will click on the top option

        cy.url().should('include','top')
        
    });


    it('mouse hover - 2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //trigger method is used for mouse actions.

        cy.get('#mousehover').trigger('mouseover')

        cy.contains('Top').click({force:true}) // this will click on the top option

        cy.url().should('include','top')

    });


    it('right click test', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick();
        
    });


    it('double click - test', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath("//button").dblclick();

        
    });

    it.only('drag and drop', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop')

        // {which: 1} - i want to work with the left button of mouse
        // {which: 2} - i want to work with the center button of mouse
        // {which: 3} - i want to work with the right button of mouse


        // it will click on the ball using left mouse button
        cy.get('#draggable').trigger('mousedown', {which: 1}) 

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true}) 
        // mouse move will drag the mouse, mouse up it will complete the drag action.
    });
});