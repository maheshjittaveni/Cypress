/// <reference types="cypress" />

describe("My 6th Test Suite", function(){

it("This is 6th cypress test", ()=>{
    cy.visit("http://rahulshettyacademy.com/AutomationPractice")
    cy.get('#opentab').then(function(el)
    {
        const url=el.prop('href')
        cy.log(url)
        cy.visit(url)
    })

  
    })  
})