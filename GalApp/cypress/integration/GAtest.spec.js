import { EMAIL } from "../fixtures/kredencijali"
import { Funkcije } from "../page-object"

describe('Login testiranje', function() {
    const funk = new Funkcije()
    this.beforeEach(function (){
        cy.visit('/')
        funk.logindugme()
    })
    it('Validni kredencijali', function() {
        funk.customlogin(EMAIL.TACANM,EMAIL.TACANP)
        funk.provera()
    })
    it('Prazan email', function() {
        funk.loginprazanmail()
        funk.provera2()
    })
      it('Prazan password', function() {
        funk.loginprazanpass()
        funk.provera2() 
    })
      it('Prazani i email i password', function() {
        funk.obaprazna()
        funk.provera2()
    })
      it('Invalidni kredencijali', function() {
        funk.customlogin(EMAIL.POGRESANE,EMAIL.POGRESANP)
        funk.provera3()
    })
})
