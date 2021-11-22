/// <reference types="cypress" />

describe("My 4th Test Suite", function(){

it("This is 4th cypress test", ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    
    //window:alert
    cy.on('window:alert', (str)=>{
        //Mocha framework and assertions 
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })


})  
})