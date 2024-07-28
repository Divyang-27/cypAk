import { Before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"


Given('user opens the Simple form url',()=>{

    // cypress code

cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('user enters firstname ,lastname, email, message',()=>{

cy.get('#firstName').type('Akhsay')
cy.get('#lastName').type('Koulgi')
cy.get('#email').type('ak@gmail.com')
cy.get('#number').type('9090909090')





})


And('clicks on submit',()=>{

    cy.get("[value='submit']").click()


})



Then('An alert saying successful message has to be displayed.',()=>{

    cy.on("window:alert",(msg)=>{

        expect(msg).to.eq('Thank You for reaching out to us, Akshay Koulgi')   
        
        return true; // this will make the alert click on ok

    })




})