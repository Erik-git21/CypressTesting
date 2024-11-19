import 'cypress-iframe'

describe("My first Test Suite",function() {
    it("This is a mouse over testing", function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      /*
      cy.get('#opentab').then(function(el) {
        const url = el.prop('href');
        cy.visit(url);
        cy.origin(url, () => {
          cy.get(".navbar-nav a").contains('Contact').click();
        })
          })
      */

      cy.frameLoaded('#courses-iframe');

      cy.iframe().find('.main-menu .navbar-collapse .navigation li a[href="practice-project"]').eq(0).click();
    


})

})


