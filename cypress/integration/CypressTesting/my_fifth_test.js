/// <reference types="cypress" />

describe("My 5th Test Suite", function(){

it("This is 5th cypress test", ()=>{
    //cy.visit("http://rahulshettyacademy.com/AutomationPractice")
    cy.visit(Cypress.env("url")+"/AutomationPractice")
    cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
        const text=$el.text()
        if(text.includes("Python")){
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceText=price.text()
                expect(priceText).to.equal('25')
            })
        }

    })


})  
})