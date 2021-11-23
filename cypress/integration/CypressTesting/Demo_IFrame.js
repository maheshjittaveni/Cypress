/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'
describe("My Demo_IFrame Test Suite", function(){

it("This is Demo_IFrame cypress test", ()=>{
    cy.visit("http://rahulshettyacademy.com/AutomationPractice")
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length','2')
  
  
    })  
})