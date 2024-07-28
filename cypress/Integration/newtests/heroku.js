describe('test suite ', () => {
    before(()=>{
       // this will act like a constructor
        // here we are initialising the data variable
        cy.fixture('example').then((data)=>{

                globalThis.data = data; 

        })

    })

    it('login test', () => {
        
        cy.visit('https://the-internet.herokuapp.com/login')

        cy.get("input[name='username']").type(data.username)

        cy.get('#password').type(data.password)


        cy.get('.radius').click()

    });
});