const { default: Footer } = require("../../components/Footer")

const counterSelector = '[data-cy=languages]'

describe('Footer.cy.js', () => {
  beforeEach(() => {
    cy.mount(<Footer />)
  })
  it('displays languages', () => {
    cy.get(counterSelector).should('have.length', 10)
  })
})