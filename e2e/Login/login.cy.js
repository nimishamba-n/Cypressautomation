/// <reference types="Cypress" />
describe('hi',()=>{
    it('hello',()=>{
        cy.visit('https://youtube.com')
        console.log("success")
    })
})