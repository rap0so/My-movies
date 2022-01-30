describe('Home', () => {
  it('should go to `/` when `/` is visited', () => {
    cy.visit('/');

    cy.location('pathname').should('eq', '/');
  });
});
