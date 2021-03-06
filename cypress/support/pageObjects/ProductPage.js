class ProductPage{

    checkOutButton(){
        return cy.get('.nav-link.btn.btn-primary')
    }
    checkOutButton2(){
        return cy.get('button[class="btn btn-success"]')
    }
    getLocation(){
        return cy.get('#country')
    }
    getAutosuggestion(){
        return cy.get('.suggestions > ul > li > a')
    }
    clickCheckbox(){
        return cy.get('#checkbox2')
    }
    clickPurchase(){
        return cy.get('input[type="submit"]')
    }
    getAlert(){
        return cy.get('.alert')
    }
    
    getTotal(){
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalFinal(){
        return cy.get('h3 strong')
    }
}
export default ProductPage;