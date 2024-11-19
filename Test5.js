//cypress - Spec

describe("My first Test Suite",function() {
    it("My first test case", function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      
      cy.get('#opentab').invoke('removeAttr','target').click();

      cy.origin("https://www.qaclickacademy.com/",() => {
        cy.get('a').contains('About us').click();
        cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy');
      })


})

})


