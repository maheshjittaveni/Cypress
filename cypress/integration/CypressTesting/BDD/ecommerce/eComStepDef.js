/// <reference types="cypress" />
import HomePage from "../../../../support/pageObjects/HomePage"
import ProductPage from "../../../../support/pageObjects/ProductPage"
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

const homePage=new HomePage()
const productPage=new ProductPage()
let name
//Given I open ecommerce page
Given('I open ecommerce page', ()=>{
    cy.visit(Cypress.env("url")+"/angularpractice")
})

//When I add items to cart
When('I add items to cart', function(){
    // here we are working with testdata- so mocha does not support ()=> function, instead use function()
    homePage.getShopTab().click()
    this.testData.productName.forEach(element => cy.selectProduct(element));
    productPage.checkOutButton().click()
})

//And Validate the total pricess
And('Validate the total pricess', ()=>{
    var sum=0
    productPage.getTotal().each(($el, index, $list)=>{
        const amout=$el.text()
        var res=amout.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)//convert string to integer or number
        
    }).then(function(){//Resolving the promise here
        cy.log(sum)
    })
    productPage.getTotalFinal().then(function(element){
        const amout=element.text()
        var res=amout.split(" ")
        var total=res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})
//Then Select the country submit and verify success message   
Then('Select the country submit and verify success message', ()=>{
    productPage.checkOutButton2().click()
    productPage.getLocation().type("india")
    productPage.getAutosuggestion().click()
    productPage.clickCheckbox().check({force: true})
    productPage.clickPurchase().click()
    //productPage.getAlert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    productPage.getAlert().then(function(element){
    const actualText=element.text()
    expect(actualText.includes("Success")).to.be.true
    })
})

    //When I fill the form details
    When('I fill the form details',function(dataTable){
        name=dataTable.rawTable[1][0]
        homePage.getEditBox().type(name)
        homePage.getGender().select(dataTable.rawTable[1][1])
    })
    //Then Validate the form behaviour 
    Then('Validate the form behaviour',function(){
        homePage.getTwoWayDataBinding().should('have.value', name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        Cypress.config('defaultCommandTimeout',8000)
    })
    //And Select the shop page
    And('Select the shop page',()=>{
        homePage.getShopTab().click()
    })