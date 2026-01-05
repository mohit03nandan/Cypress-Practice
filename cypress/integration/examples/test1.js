/// <reference types = "cypress" />
// A solid test generally covers 3 phases:

// Set up the application state.
// Take an action.
// Make an assertion about the resulting application state.

describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.url().should('include', '/seleniumPractise')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    // cy.get('.product:visible').should('have.length',4);
    cy.get('.products').find('.product:visible').should('have.length',4);
    cy.get('.products').find('.product:visible').eq(1).contains('ADD TO CART').click();
    // parent child chaining
    cy.get('.products').find('.product').should('have.length',4);
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

    // each function
    cy.get('.products').find('.product').each(($el) => {
      cy.wrap($el).find('h4.product-name').invoke('text').then((text) => {
        if (text.includes('Brocoli')) {  
          cy.wrap($el).find('button').click()
        }
      })
    })

  })
})