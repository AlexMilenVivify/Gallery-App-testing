import { EMAIL } from "/Users/aleksandarmilenkovski/Projekti/GalApp/cypress/fixtures/kredencijali.js"
export class Funkcije {
    logindugme() {
        cy.get('.nav-link').contains('Login').click()
    }
    validni() {
        cy.get('#email').type(EMAIL.TACANM)
        cy.get('#password').type(EMAIL.TACANP)
        cy.contains('Submit').click()
        cy.wait(5000)
    }
    provera() {
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').contains('Logout').should('be.visible') 
        cy.get('.nav-link').contains('My Galleries').should('be.visible') 
        cy.get('.nav-link').contains('Create Gallery').should('be.visible') 
    }
    prazanmail() {
        cy.get('#email').type(EMAIL.TACANM).clear()
        cy.get('#password').type(EMAIL.TACANP)
        cy.contains('Submit').click()
        cy.wait(5000)
    }
    prazanpass() {
        cy.get('#email').type(EMAIL.TACANM)
        cy.get('#password').type(EMAIL.TACANP).clear()
        cy.contains('Submit').click()
        cy.wait(5000)
    }
    praznaoba() {
        cy.get('#email').type(EMAIL.TACANM).clear()
        cy.get('#password').type(EMAIL.TACANP).clear()
        cy.contains('Submit').click()
        cy.wait(5000)
    }
    pogresnikred() {
        cy.get('#email').type(EMAIL.POGRESANE)
        cy.get('#password').type(EMAIL.POGRESANP)
        cy.contains('Submit').click()
        cy.wait(5000)
    }
}
