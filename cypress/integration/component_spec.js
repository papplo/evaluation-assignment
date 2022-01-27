const localURL = 'localhost:1234'

describe('App loads', () => {
    it('form is visible', () => {
        cy.visit(localURL)
        cy.contains('Card Number')
    })
    it('input field for card number takes only numbers', () => {
        cy.visit(localURL)
        cy.get('[name="cardNumber"]')
            .type('qwerty dvorak')
            .type('4500450045004500')
            .should('have.value', '4500 4500 4500 4500')
    })
    it('selected expiry date shows on credit card composition', () => {
        cy.visit(localURL)
        cy.get('#month')
            .select('02')
        cy.get('#year')
            .select('2022')
        cy.get('.details-card-expiration-date > h5')
            .should('contain', '02 / 2022')
    })
    it('submit is not clickable until validation is met', () => {
        cy.visit(localURL)
        cy.get('button')
            .click()
        cy.url().should('not.include', '?submitted=true')

        cy.get('[name="cardNumber"]')
            .type('4500450045004500')
        cy.get('[name="cardName"]')
            .type('qwerty dvorak')
        cy.get('#month')
            .select('02')
        cy.get('#year')
            .select('2022')
        cy.get('#frmCCCVC')
            .type('123')
        cy.get('button')
            .should('contain', 'Submit')
            .click()
        cy.url().should('include', '?submitted=true')

    })
})