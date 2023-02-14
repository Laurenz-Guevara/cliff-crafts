/// <reference types="cypress" />

describe('Load landing page and view featured products.', () => {
  it('Loads the page.', () => {
    cy.visit('http://localhost:5173/');
  });

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('Has welcome text.', () => {
    cy.contains('CLIFFCRAFTS');
    cy.contains('AFFORDABLE CLIMBING GEAR FROM BRANDS YOU TRUST');
  });

  it("Let's you enter the page with a button.", () => {
    cy.get('a').click();
    cy.contains('Featured');
  });

  it('Displays featured products and images.', () => {
    cy.visit('http://localhost:5173/store');
    cy.get('.product-preview').children().find('img').should('be.visible');
  });
});
