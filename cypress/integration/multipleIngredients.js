import LoginPage from '../support/pages/LoginPage'
import MainPage from '../support/pages/MainPage'
import PizzaSection from '../support/pages/PizzaSection'
import ConfirmationPage from '../support/pages/ConfirmationPage'

const loginPage = new LoginPage();
const mainPage = new MainPage();
const pizzaSection = new PizzaSection();
const confirmationPage = new ConfirmationPage();

describe('Test order with different ingredients', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('local_env'));
        loginPage.getOrderButton().click();
    })

    it('User pick pizza with cheese, bacon and agg', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getSmallSizeButton().click();
        pizzaSection.getCheeseButton().click();
        pizzaSection.getBaconButton().click();
        pizzaSection.getEggButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick pizza with cheese and bacon', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getMediumSizeButton().click();
        pizzaSection.getCheeseButton().click();
        pizzaSection.getBaconButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick pizza with cheese and egg', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        pizzaSection.getLargeSizeButton().click();
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getCheeseButton().click();
        pizzaSection.getEggButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick pizza with bacon and egg', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getLargeSizeButton().click();
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getBaconButton().click();
        pizzaSection.getEggButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })
})
