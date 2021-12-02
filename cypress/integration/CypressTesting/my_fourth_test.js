/// <reference types="cypress" />

describe("My 4th Test Suite", function(){

it("This is 4th cypress test", ()=>{
    //cy.visit("http://rahulshettyacademy.com/AutomationPractice")
    cy.visit(Cypress.env("url")+"/AutomationPractice")
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    
    //window:alert
    cy.on('window:alert', (str)=>{
        //Mocha framework and assertions 
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    cy.on('window:confirm', (str)=>{
        //Mocha framework and assertions 
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    // Removes the target attribute
    cy.get('#opentab').invoke('removeAttr','target').click()
    //Validate if its launched right page or not
    //for substring, we use include
    cy.url().should('include','rahulshetty')
    cy.go('back')
    //cy.go('forward')


})  
})