// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command and pass to the new page--
Cypress.Commands.add('login', (username, password) => { 
    const args = { username, password }
    cy.session(
      args,
      () => {
          cy.visit('https://test.salesforce.com/')
          cy.get('#username').type(username)
            cy.get('#password').type(password)
            cy.get('#Login').click()
            cy.wait(2000)
            cy.origin('https://homeland--preprod.lightning.force.com/lightning/setup/Roles/home',() => {
                cy.wait(3000)
            cy.contains('href="javascript:roleTreeNode.expandAllRoles()').click()
        })
        cy.title("AA").should("be.visible")
     })
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
