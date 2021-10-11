class LoginPage {
    getOrderButton() {
        return cy.get('button > span').contains('Order your');
    }

    getLoginUserName(){
        return cy.get('#username');
    }
    getRegisterButton() {
        return cy.get('.woocommerce-Button');
    }
}
export default LoginPage
    