const { default: Input } = require("../../components/Input")

const counterSelector = '[data-cy=email]'


describe('Input.cy.js', () => {
  beforeEach(() => {
    cy.mount(<Input type={'text'} placeholder='Email' cyType={'email'} />)

  })
  it('Should have placeholder', () => {
    cy.get(counterSelector).should('have.attr', 'placeholder', 'Email')
    .type('password')
    .should('have.value', 'password')
  })
})