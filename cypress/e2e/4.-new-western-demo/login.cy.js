/// <reference types="cypress" />

context('Login for Demo', () => {

  describe('Succesfull Login ', () => {
    it('Login in the Home Page with correct credentials', () => {
      cy.fixture('preprod_user').then((user) => {
        cy.login(user.username,user.password)
      })
    })
  })
})