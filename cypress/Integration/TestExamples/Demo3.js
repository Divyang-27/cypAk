///<reference types="@cypress/xpath" />

describe('TestSuite - collection of test cases', () => {
    it.only('test case', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()  
        //logout operation
        cy.get("p[class='oxd-userdropdown-name']").click()

        //cy.get(".oxd-dropdown-menu").find(".oxd-userdropdown-link").should("have.length",4)

 
        cy.get(".oxd-dropdown-menu").eq(3).then((ele)=>{

            cy.log(ele.text())
            cy.wrap(ele).click()
            cy.wait(3000)
});

        //cy.get("a[href='/web/index.php/auth/logout']").click()
        
    });


});