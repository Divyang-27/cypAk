///<reference types="@cypress/xpath" />


describe('rahul shetty tests', () => {
    
it('alert test', () => {
    
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#alertbtn').click()
//cy.wait(4000)
// cypress automatically handles alert - 

cy.on("window:alert",((message)=>{


expect(message).to.equal('Hello , share this practice page and share your knowledge')

return true
// it will click on ok if we return true 
}))

});

it.only('conform alert', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('#confirmbtn').click()

    cy.on("window:confirm",(confirm)=>{

expect(confirm).to.equal('Hello , Are you sure you want to confirm?')

return false

    })

    
});


});