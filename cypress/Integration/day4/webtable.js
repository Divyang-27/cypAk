describe('Webtables', () => {
    it('webtable test', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.xpath("//table[@class='table-display']/tbody/tr[9]/td[2]").should('include.text','Master Selenium Automation in simple Python Language')


    });


    it('web table test 2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//table[@class='table-display']/tbody/tr[9]/td").each(($el,index,$list)=>{

           // let text1 = $el.text()

            if ($el.text().includes('Python')) {

                //cy.log($el.text())

                // promises and then 
                cy.wrap($el).next().then((price)=>{

                            cy.log(price.text()) 

                })
                
            }


        })

    
    });


});