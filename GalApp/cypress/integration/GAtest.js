import { EMAIL } from "../fixtures/kredencijali"
import { Funkcije } from "../page-object"

describe('Login testiranje', function() {
    const funk = new Funkcije()
    this.beforeEach(function (){
        cy.visit('/')
        funk.logindugme()
    })
    it('Validni kredencijali', function() {
        funk.validni()
        funk.provera()
    })
    it('Prazan email', function() {
        funk.prazanmail()
        funk.provera() 
    })
      it('Prazan password', function() {
        funk.prazanpass()
        funk.provera()
    })
      it('Prazani i email i password', function() {
        funk.praznaoba()
        funk.provera()
    })
      it('Invalidni kredencijali', function() {
        funk.pogresnikred()
        funk.provera() 
    })
})
