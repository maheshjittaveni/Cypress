/// <reference types="cypress" />

describe("My Second Test Suite", function(){

it("This is Second cypress test", ()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise")
    cy.get('.search-keyword').type("ca")
    cy.wait(2000)
    //Aliasing
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
        const txtVeg=$el.find('h4.product-name').text()
        if(txtVeg.includes('Cashews'))
        {
            $el.find('button').click()
         }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()


})  
})