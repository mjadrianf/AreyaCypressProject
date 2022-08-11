/// <reference types="cypress" />

context('Login for Demo', () => {
  
  before(() => {
    cy.visit('https://www.opencart.com/')
  })

  describe('Not Succesfull Login ', () => {
    it('Login in the Home Page with wrong credentials', () => {
      cy.get('.btn-link').click()
      cy.get('#input-email').type("test@cl.cl")
      cy.get('#input-password').type("pass")
      cy.get(':nth-child(1) > .hidden-xs').click()
      cy.get('.alert').should("contain"," No match for E-Mail and/or Password.")
    })
  })
})