/// <reference types="cypress" />

describe('Purchase a product and view cart', () => {
  it('Lets you complete a purchase.', () => {
    cy.visit('http://localhost:5173/');
    cy.get('a').click();
    cy.get('.product-preview-container').children().eq(0).click();
    cy.get('.product-size-item li').eq(1).click();
    cy.get('.cart-btn-container').children().eq(0).click();
    cy.get('.shopping-basket-container a').click();
    cy.get('.checkout-item').children().find('img').should('be.visible');
    cy.get('button').contains('Complete Purchase');
  });
});
