//cypress - Spec

describe("My first Test Suite",function() {
    it("My first test case", function() {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
      cy.get(".search-keyword").type("ca");
      cy.wait(2000);
      cy.get(".product:visible").should("have.length", 4);

      cy.get('.products').as('productsLocator');
      cy.get('@productsLocator').find('.product').should('have.length',4);
      //fixture
      cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click();
      cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text();
        if(textVeg.includes("Cashews")) {
          cy.wrap($el).find('.product-action').eq(0).click();
        }
      })

      cy.get('.brand').should('have.text', 'GREENKART');

      cy.get('.brand').then(function(element) {
        cy.log(element.text());
      })
    });

    
})


