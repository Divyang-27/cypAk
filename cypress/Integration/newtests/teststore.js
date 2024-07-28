describe('test store', () => {
    it('contact test', () => {
        
        cy.visit('https://automationteststore.com/')

       // cy.contains('Contact Us').click();

       cy.xpath("//a[text()='Contact Us']").click();

        cy.get("#ContactUsFrm_first_name").type('abhishek');
        cy.get("#ContactUsFrm_email").type('abhishek@gmail.com');

        cy.get("#ContactUsFrm_enquiry").type('abhishek');

        cy.contains('Submit').click();

        // assertion - checking whether after submitting, the text is present in the UI or not.

        cy.xpath("//*[contains(text(),'successfully')]").should('have.text','Your enquiry has been successfully sent to the store owner!')


    });
});