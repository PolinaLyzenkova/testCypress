import LoginPage from '../support/pages/LoginPage'
import MainPage from '../support/pages/MainPage'
import PizzaSection from '../support/pages/PizzaSection'
import ConfirmationPage from '../support/pages/ConfirmationPage'

const loginPage = new LoginPage();
const mainPage = new MainPage();
const pizzaSection = new PizzaSection();
const confirmationPage = new ConfirmationPage();

describe('Test order different sizes of pizza with one ingredient', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('local_env'));
        loginPage.getOrderButton().click();
    })

    it('User pick small size of pizza and cheese', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getSmallSizeButton().click();
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getCheeseButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick medium size of pizza and bacon', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getMediumSizeButton().click();
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getBaconButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick large size of pizza and egg', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getLargeSizeButton().click();
        mainPage.checkSubmitButtonIsDisabled();
        pizzaSection.getEggButton().click();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })
})
