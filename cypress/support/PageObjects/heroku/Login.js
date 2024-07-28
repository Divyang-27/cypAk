class LoginPage{

    // page object model ,where i am defining my objects and methods for user actions seperately.

    // in this class , we are implementng login code pf heroku

    visiturl(){

        cy.visit('https://the-internet.herokuapp.com/login')
    }


    Login(){


        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    }

}

export default LoginPage;  
