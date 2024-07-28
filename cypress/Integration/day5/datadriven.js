describe('data driven testing suite', () => {

    before(()=>{

            cy.fixture('example').then((data)=>{

                    globalThis.data = data;

            })

    })
    it('test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //cy.get("input[name='username']").type('Admin');

        cy.xpath("//input[@name='username']").type(data.name)

       // cy.get("input[name='password']").type('admin123');


       cy.xpath("//input[@type='password']").type(data.password)

        //cy.get(".orangehrm-login-button").click();


        cy.xpath("//button[@type='submit']").click();
        cy.wait(2000);

    });
});