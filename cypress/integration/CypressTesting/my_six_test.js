/// <reference types="cypress" />

describe("My 6th Test Suite", function(){

it("This is 6th cypress test", ()=>{
    cy.visit("http://rahulshettyacademy.com/AutomationPractice")

    // Mouse over and invisible elements handling
    //cy.get('div.mouse-hover-content').invoke('show')
    //force:true
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')
    })  
})