describe('Navbar', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to Transactions', () => {
    cy.get('[data-selector="nav-item-transaction"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/transactions')
  })

  it('should navigate to Profile', () => {
    cy.get('[data-selector="nav-item-profile"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/profile')
  })
})
