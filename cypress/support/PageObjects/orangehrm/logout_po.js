class Logout_po{

logout(){
    cy.get("p[class='oxd-userdropdown-name']").click()

    cy.get(".oxd-dropdown-menu").find(".oxd-userdropdown-link").should("have.length",4)

    cy.get("a[href='/web/index.php/auth/logout']").click();

}


}


export default Logout_po;
