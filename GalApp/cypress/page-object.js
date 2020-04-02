/// <reference types="cypress" />
import { EMAIL } from "../cypress/fixtures/kredencijali"
export class Funkcije {
    logindugme() {
        cy.get('.nav-link').contains('Login').click()
    }
    provera() {
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').contains('Logout').should('be.visible') 
        cy.get('.nav-link').contains('My Galleries').should('be.visible') 
        cy.get('.nav-link').contains('Create Gallery').should('be.visible') 
    }
    provera2() {
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login')
        cy.get('.nav-link').contains('Login').should('be.visible') 
        cy.get('.nav-link').contains('Register').should('be.visible')
    }
    provera3() {
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/login')
        cy.get('.nav-link').contains('Login').should('be.visible') 
        cy.get('.nav-link').contains('Register').should('be.visible') 
        cy.get('.alert-danger').contains('Bad Credentials').should('be.visible')
    }
    email() {
        return cy.get('#email')
    }
    pass() {
        return cy.get('#password')
    }
    loginipsravan() {
        this.email().type(EMAIL.TACANM)
        this.pass().type(EMAIL.TACANP)
        cy.contains('Submit').click()
        cy.wait(5000)
    }
    loginprazanmail() {
        this.pass().type(EMAIL.TACANP)
        cy.wait(5000)
        cy.contains('Submit').click()
        this.email().then(($input) => {
             expect($input[0].validationMessage).to.eq('Please fill out this field.')
             })
    }
    customlogin(email,password) {
        this.email().type(email)
        this.pass().type(password)
        cy.contains('Submit').click()
        cy.wait(5000)
    }
    loginprazanpass() {
        this.email().type(EMAIL.TACANM)
        cy.wait(5000)
        cy.contains('Submit').click()
        this.pass().then(($input) => {
            expect($input[0].validationMessage).to.eq('Please fill out this field.')
            })
    }
    obaprazna() {
        cy.contains('Submit').click()
        this.email().then(($input) => {
             expect($input[0].validationMessage).to.eq('Please fill out this field.')
             })
    }
}
