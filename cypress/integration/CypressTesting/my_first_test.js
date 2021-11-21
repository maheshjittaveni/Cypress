/// <reference types="cypress" />

describe("My First Test Suite", function(){

it("This is first cypress test", ()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise")
    cy.get('.search-keyword').type("ca")
    cy.wait(2000)
    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)
    //parent child chaining
    //Aliasing
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length', 4)
    cy.get('@productLocator').find('.product').eq(2).contains("ADD TO CART").click().then(function(){
        console.log('mahesh')
    })
    //cy.get("ADD TO CART")
   
    cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
        const txtVeg=$el.find('h4.product-name').text()
        if(txtVeg.includes('Cashews'))
        {
            $el.find('button').click()
         }
    })
    //assert if logo text is correctly displayed or not
    cy.get('.brand').should('have.text','GREENKART')

    //this is to print logo text in console
    cy.get('.brand').then(function(logoElement){
        cy.log(logoElement.text());
    })
    
})  
})