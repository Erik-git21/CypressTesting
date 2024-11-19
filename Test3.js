//cypress - Spec

describe("My first Test Suite",function() {
    it("My first test case", function() {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    //  cy.get('input[type="checkbox"]').check(['option2','option3']);

     /* cy.get('#checkbox-example fieldset label').each(($el, index, $list) => {
          cy.wrap($el).find('input[type="checkbox"]').check();
      })*/

      
      cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');

      cy.get('#autocomplete').type('ind');

      cy.get('#ui-id-1 .ui-menu-item div').each(($el, index, $list) => {

        if($el.text() === 'India') {
          cy.wrap($el).click();
        }

      })

      cy.get('#autocomplete').should('have.value', 'India');

      cy.get('#displayed-text').should('be.visible');
      cy.get('#hide-textbox').click();
      cy.get('#displayed-text').should('not.be.visible');

      //radio buttons

      cy.get(`input[value="radio2"]`).check().should('be.checked');

})

})


