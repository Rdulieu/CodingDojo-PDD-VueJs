import { dataSelector } from '../dataselector'

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should diplay title', () => {
    cy.get(dataSelector('home-title')).should('contains.text', 'Hello')
  })
})
