///<reference types="@cypress/xpath" />


describe('rs test', () => {
   
    it('radio button', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//table[@class='table-display']/tbody/tr[9]/td").each(($el,index,$list)=>{

            const text1 = $el.text()
            //cy.log(text1)

            if (text1.includes('Python')) {
                
                cy.wrap($el).next().then((price)=>{

                    cy.log(price.text())

                })

            }


        })
       
    });

    it('web table 2', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("(//table[@id='product'])[2]/tbody/tr[9]/td").each(($el,index,$list)=>{

        const text2 = $el.text()

        if (text2.includes('Smith')) {

            cy.wrap($el).next().then((price)=>{

                cy.log(price.text())

            })

            
        }


        })

    });



});