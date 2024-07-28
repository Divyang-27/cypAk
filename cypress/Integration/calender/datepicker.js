//import { recurse } from "cypress-recurse";


describe('', () => {
    
    it("Select date based on month", () => {
        cy.visit("https://demo.automationtesting.in/Datepicker.html");
        cy.get("#datepicker1").click();
        recurse(
          () => cy.get(".ui-datepicker-month").invoke("text"),
          (n) => {
            if (!n.includes("December")) {
              cy.get("[title='Next']").click();
              return false;
            }
            cy.contains("[data-handler='selectDay'] a", "24").click();
            return true;
          },
          {
            limit: 12,
          }
        );
      });

});