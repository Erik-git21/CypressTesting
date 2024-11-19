import 'cypress-iframe'
import HomePage from './page_objects/HomePage';
import ProductPage from './page_objects/ProductPage';

describe("My first Test Suite",function() {

    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data; 
        })
    })


    it("This is a test case", function() {
    
    const homePage = new HomePage();
    const productPage = new ProductPage();
    
    cy.visit(Cypress.env('url'));
   
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value',this.data.name);
    homePage.getEditBox().should('have.attr','minlength','2');
    homePage.getRadioButton().should('be.disabled');   
   // cy.pause();
    homePage.getShopTab().click();

    this.data.productName.forEach((element) => {
        cy.selectProduct(element);
    })

    productPage.getCheckoutButton().click(); 
    let summary = 0;

    cy.get('tr td:nth-child(4) strong').each(($el, index,$list) => {
        const priceElement = $el.text().slice(2);
        summary = summary + Number(priceElement); 
        
    }).then(function() {
        cy.log(summary);
    })
    
    cy.get('.text-right h3 strong').then(function(element) {
        let totalPrice  = element.text();
        totalPrice = totalPrice.slice(2);
        
        expect(Number(totalPrice)).to.equal(summary);
    })

    
    cy.get('button').contains('Checkout').click();
    cy.get('#country').click().type('in');
    cy.wait(6000);
    cy.get('.suggestions ul li a').each(($el,index,$list) => {
        const suggText = $el.text();
        
        if(suggText === 'Finland') {
            cy.get('.suggestions ul li a').eq(index).click();
        }
    })
    cy.get('#checkbox2').click({force:true});
    cy.get('input[value="Purchase"]').click();
  //  cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).');
    cy.get('.alert').then(function(element) {
        const actualText = element.text();
        expect(actualText.includes("Success")).to.be.true;
    })



})

})

