///<reference types="@cypress/xpath" />

describe('test suite 2', () => {
    it('automating demo website - contact us form', () => {
        
        cy.visit("https://automationteststore.com/")
        cy.xpath("//a[text()='Contact Us']").click()
        cy.get("#ContactUsFrm_first_name").type("akshay")
        cy.get("#ContactUsFrm_email").type("akshay.koulgi@gmail.com").should('have.attr','name','email')
        cy.get("#ContactUsFrm_enquiry").type("I am learning cypress")
        cy.xpath("(//button[@type='submit'])[1]").click()

        cy.xpath("//*[contains(text(),'successfully')]").should("have.text","Your enquiry has been successfully sent to the store owner!")
        cy.log("Test completed and registered")


    })

    it.only('gettext of a product', () => {
        
        cy.visit("https://automationteststore.com/")
        
        cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").then((header)=>{

                cy.log(header.text)
                cy.wait(5000)

        })
        

    });
    
});