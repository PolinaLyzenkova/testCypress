class PizzaSection {
    
    getDeleteButton() {
        return cy.get('[data-icon="trash"]');
    }

    getDeleteButtonForPizza(pizzaNumber) {
        return cy.get('.MuiTypography-root.MuiTypography-body1')
            .eq(pizzaNumber - 1)
            .parent('div')
            .find('div')
            .eq(0);
    }

    checkPizzaIsExist(pizzaNumber) {
        cy.get('.MuiTypography-root.MuiTypography-body1')
            .eq(pizzaNumber - 1)
            .contains('Pizza #')
            .contains(pizzaNumber)
            .should('be.visible');
    }

    setSizeOfPizza(pizzaNumber, size){
        cy.get('.MuiTypography-root.MuiTypography-body1')
            .eq(pizzaNumber - 1)
            .parent('div')
            .contains(size)
            .click()
    }

    setIngredientForPizza(pizzaNumber, ingredient){
        cy.get('.MuiTypography-root.MuiTypography-body1')
            .eq(pizzaNumber - 1)
            .parent('div')
            .contains(ingredient)
            .click()
    }

    checkPizzaIsNotExist(pizzaNumber) {
        cy.get('.MuiTypography-root').contains(pizzaNumber).should('not.exist');
    }

    getSmallSizeButton() {
        return cy.get('.MuiPaper-root').contains('small');
    }

    getMediumSizeButton() {
        return cy.get('.MuiPaper-root').contains('medium');
    }

    getLargeSizeButton() {
        return cy.get('.MuiPaper-root').contains('large');
    }

    getCheeseButton() {
        return cy.get('.MuiPaper-root').contains('cheese');
    }

    getBaconButton() {
        return cy.get('.MuiPaper-root').contains('bacon');
    }

    getEggButton() {
        return cy.get('.MuiPaper-root').contains('egg');
    }
    
}
export default PizzaSection
