import LoginPage from '../support/pages/LoginPage'
import MainPage from '../support/pages/MainPage'
import PizzaSection from '../support/pages/PizzaSection'
import ConfirmationPage from '../support/pages/ConfirmationPage'

const loginPage = new LoginPage();
const mainPage = new MainPage();
const pizzaSection = new PizzaSection();
const confirmationPage = new ConfirmationPage();

describe('Test order multiple pizzas', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('local_env'));
        loginPage.getOrderButton().click();
    })

    it('User pick two pizzas with different ingresients and submit the order', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        pizzaSection.getSmallSizeButton().click();
        pizzaSection.getCheeseButton().click();
        pizzaSection.getEggButton().click();

        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(2);
        pizzaSection.setSizeOfPizza(2, 'large');
        pizzaSection.setIngredientForPizza(2, 'bacon')
        
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick three pizzas with different ingresients and submit the order', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        pizzaSection.getMediumSizeButton().click();
        pizzaSection.getEggButton().click();

        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(2);
        pizzaSection.setSizeOfPizza(2, 'small');
        pizzaSection.setIngredientForPizza(2, 'cheese');

        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(3);
        pizzaSection.setSizeOfPizza(3, 'large');
        pizzaSection.setIngredientForPizza(3, 'bacon');
        
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })

    it('User pick three pizzas and check that Add button is disabled, make an order', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        pizzaSection.getMediumSizeButton().click();
        pizzaSection.getCheeseButton().click();
        pizzaSection.getBaconButton().click();
        pizzaSection.getEggButton().click();

        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(2);
        pizzaSection.setSizeOfPizza(2, 'large');
        pizzaSection.setIngredientForPizza(2, 'cheese');

        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(3);
        pizzaSection.setSizeOfPizza(3, 'small');
        pizzaSection.setIngredientForPizza(3, 'egg');

        mainPage.checkAddPizzaButtonIsDisabled();
        mainPage.getSubmitOrderButton().click();
        confirmationPage.checkСonfirmationеTitle();
    })
})
