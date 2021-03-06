/// <reference types="cypress" />

describe("My Third Test Suite", function(){

it("This is Third cypress test", ()=>{
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.visit(Cypress.env("url")+"/AutomationPractice")
    //multiple assertions- chai js library
    //Check boxes
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    //Static drop downs
    cy.get('select').select('option2').should('have.value','option2')

    //Dynamic Dropdowns
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($el, index, $list)=> {
        
        if($el.text()=='India')
        {
            $el.click()
         }
    })
    cy.get('#autocomplete').should('have.value','India')

    //Visible and invisible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //Radio buttons
    cy.get('input[value="radio2"]').check().should('be.checked')

})  
})