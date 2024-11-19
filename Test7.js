//cypress - Spec

describe("My first Test Suite",function() {
    it("This is a mouse over testing", function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      
      //cy.get('.mouse-hover-content').invoke('show');
      cy.contains('Top').click({force: true});
      cy.url().should('include','top');
})

})


