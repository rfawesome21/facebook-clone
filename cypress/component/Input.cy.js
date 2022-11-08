const { default: Input } = require("../../components/Input")

const counterSelector = '[data-cy=email]'


describe('Input.cy.js', () => {
  beforeEach(() => {
    cy.mount(<Input type={'email'} placeholder='Email' />)

  })
  it('Should have placeholder', () => {
    cy.get(counterSelector).should('have.attr', 'placeholder', 'Email')
  })
})