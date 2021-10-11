class MainPage {

    checkHeaderIsVisible() {
        cy.get('.MuiTypography-root').contains('Assemble your pizza').should('be.visible');
    }

    getAddPizzaButton() {
        return cy.get('button > span').contains('Add pizza');
    }

    getSubmitOrderButton() {
        return cy.get('button > span').contains('submit order');
    }

    checkAddPizzaButtonIsDisabled(){
        cy.get('.MuiButton-containedSecondary').should('be.disabled');
    }

    checkSubmitButtonIsDisabled(){
        cy.get('.MuiButton-containedPrimary').should('be.disabled');
    }


}
export default MainPage
