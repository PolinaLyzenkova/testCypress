import LoginPage from '../support/pages/LoginPage'
import MainPage from '../support/pages/MainPage'
import PizzaSection from '../support/pages/PizzaSection'

const loginPage = new LoginPage();
const mainPage = new MainPage();
const pizzaSection = new PizzaSection();

describe('Test add and delete order for pizza', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('local_env'));
        loginPage.getOrderButton().click();
    })

    it('Visit the site, order one pizza and delete it from the order', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        pizzaSection.getDeleteButton().click();
        pizzaSection.checkPizzaIsNotExist(1);
    })

    it('Add three pizzas and delete second one from the order, check there are only two pizzas left in the order', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(2);
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(3);
        pizzaSection.getDeleteButtonForPizza(2).click();
        pizzaSection.checkPizzaIsNotExist(3);
        pizzaSection.checkPizzaIsExist(2);
        pizzaSection.checkPizzaIsExist(1);
    })

    it('Add two pizzas and delete both from the order, check there is no pizzas left in the order', () => {
        mainPage.checkHeaderIsVisible();
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(1);
        mainPage.getAddPizzaButton().click();
        pizzaSection.checkPizzaIsExist(2);
        pizzaSection.getDeleteButtonForPizza(1).click();
        pizzaSection.getDeleteButtonForPizza(1).click();
        pizzaSection.checkPizzaIsNotExist(1);
    })
})