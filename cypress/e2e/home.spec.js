it('should go to `/` when `/` is visited', () => {
  cy.intercept('GET', '**/movie/**', {
    fixture: 'upcoming',
  });

  cy.visit('/');

  cy.location('pathname').should('eq', '/');
});

it('should read the titles of the sections', () => {
  cy.contains('The Best of Upcoming');
  cy.contains('Top Rated');
  cy.contains('Everybody is talking about');
});

it('should see the movies', () => {
  cy.get('.swiper-container').find('img').should('have.length', 60);
});

it('should load more movies when click on next button', () => {
  cy.get('.swiper-container').first().as('firstSection');

  cy.get('@firstSection').find('img').should('have.length', 20);

  cy.get('@firstSection')
    .find('.swiper-button-next')
    .first()
    .then((element) => {
      let twentyTimes = 20;
      while (twentyTimes > 0) {
        cy.wrap(element).click();
        cy.wait(500);
        twentyTimes--;
      }
    });

  cy.get('@firstSection').find('img').should('have.length', 40);
});

it('should add movies to my-list when click on control button', () => {
  cy.get('.swiper-container').first().as('firstSection');

  cy.get('@firstSection')
    .find('[data-testid="card-container"]')
    .first()
    .find('button')
    .first()
    .click();

  cy.wait(1000);

  cy.get('@firstSection')
    .find('[data-testid="card-container"]')
    .eq(2)
    .find('button')
    .first()
    .click();
});
