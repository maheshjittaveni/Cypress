/// <reference types="cypress" />

describe("My First Test Suite", function(){

it("This is first cypress test", ()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise")
    cy.get('.search-keyword').type("ca")
    cy.wait(2000)
    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)
    //parent child chaining
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()
    //cy.get("ADD TO CART")
    console.log('mahesh')

    cy.get('.products').find('.product').each(($el, index, $list)=> {
        const txtVeg=$el.find('h4.priduct-name').text()
        if(txtVeg.includes('Cashews'))
        {
            $el.find('button').click()
         }
    })
    cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text());
    })
    
})  
})