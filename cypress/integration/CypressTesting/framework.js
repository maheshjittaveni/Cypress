/// <reference types="cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

describe("My Framework Test Suite", function(){
var testData
    before(function(){
    //runs once before all tests in the block
    cy.fixture('example').then(function(data){
        testData=data
        return testData
    })
 })
it("This is Framework cypress test", ()=>{
 
    const homePage=new HomePage()
    const productPage=new ProductPage()
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    
    homePage.getEditBox().type(testData.name1)
    homePage.getGender().select(testData.gender1)
    homePage.getTwoWayDataBinding().should('have.value', testData.name1)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    // to pause the script for debugging
    //cy.pause() we should not include it in the prod code, once the issue has been resloved we need to remove this pause and debug
    //cy.debug()

       // explicitly declaring timeout for specific spec file, this timeout is applied from the below step only
       Cypress.config('defaultCommandTimeout',8000)
    homePage.getShopTab().click()
    testData.productName.forEach(element => cy.selectProduct(element));
    productPage.checkOutButton().click()
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
    
})