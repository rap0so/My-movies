it('should go to `/my-list` when `/my-list` is visited', () => {
  cy.visit('/my-list');

  cy.contains('My List').click();

  cy.location('pathname').should('eq', '/my-list');
});

it('should go to `/my-list` when click on navbar link', () => {
  cy.intercept('GET', '**/movie/**', {
    fixture: 'upcoming',
  });

  cy.visit('/');

  cy.contains('My List').click();

  cy.location('pathname').should('eq', '/my-list');
});

it('should list movies added to the list', () => {
  cy.intercept('GET', '**/movie/**', {
    fixture: 'upcoming',
  });

  cy.visit('/');

  cy.get('.swiper-container')
    .first()
    .find('[data-testid="card-container"]')
    .first()
    .find('button')
    .first()
    .click();

  cy.contains('My List').click();

  cy.get('[data-testid="card-container"]').should('have.length', 1);
});
