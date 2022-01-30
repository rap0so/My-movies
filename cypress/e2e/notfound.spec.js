it('should keep path when nonexistent route is visited', () => {
  cy.visit('/asdasdasd');

  cy.location('pathname').should('eq', '/asdasdasd');
});

it('should read the main title', () => {
  cy.contains('Hmmm... Page Not Found');
});

it('should redirected to `/` when click "Go back home"', () => {
  cy.contains('Go back home').click();

  cy.location('pathname').should('eq', '/');
});
