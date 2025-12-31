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
    cy.get('.product:visible').should('have.length',4);
  })
})