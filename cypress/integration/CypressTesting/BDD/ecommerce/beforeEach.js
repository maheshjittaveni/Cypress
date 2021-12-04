
beforeEach(function(){
    cy.fixture('example').then(function(data){
       this.testData=data
           })
})

// here we are working with testdata- so mocha does not support ()=> function, instead use function()