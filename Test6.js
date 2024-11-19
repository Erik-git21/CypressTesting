//cypress - Spec

describe("My first Test Suite",function() {
    it("This is table checking", function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      
      cy.get('.table-display tbody tr td:nth-child(2)').each(($el, index,$list)=> {

        const text = $el.text();

        if(text.includes("Master")) {
          cy.get('.table-display tbody tr td:nth-child(2)').eq(index).next().then(function(price) {
            const priceText = price.text(); 
            expect(priceText).to.equal("25");
          });
        }
        
      })


})

})


