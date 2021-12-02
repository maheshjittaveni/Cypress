/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/ProductPage"

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
    cy.visit(Cypress.env("url")+"/angularpractice")
    
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