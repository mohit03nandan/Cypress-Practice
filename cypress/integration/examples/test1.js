// A solid test generally covers 3 phases:

// Set up the application state.
// Take an action.
// Make an assertion about the resulting application state.

describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })
})