class СonfirmationPage {

    checkСonfirmationеTitle() {
        cy.get('.makeStyles-container-1 > p').contains('Thank you for your order!').should('exist');
        }

}
export default СonfirmationPage