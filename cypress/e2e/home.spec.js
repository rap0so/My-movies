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

it('should see the movie description when click on movie image', () => {
  cy.get('.swiper-container').first().find('img').first().click();
  cy.get('.chakra-modal__content').should('be.visible');
  cy.contains('Scream');
  cy.contains(
    'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
  );
  cy.get('.chakra-modal__close-btn').click();
});

it('should search for movies', () => {
  cy.intercept('GET', '**/search/movie/**', {
    fixture: 'search',
  });
  cy.get('[data-testid="searchbar"]')
    .find('[data-testid="search-wrapper"]')
    .click();

  cy.get('[data-testid="searchbar"]').find('input').type('spiderman');
  cy.get('.chakra-modal__body').as('searchResult');
  cy.get('@searchResult').should('be.visible');

  cy.get('@searchResult')
    .find('[data-testid="card-container"]')
    .as('movies')
    .should('have.length', 20);

  cy.get('@searchResult').scrollTo('bottom');

  cy.wait(3000);

  cy.get('@searchResult')
    .find('[data-testid="card-container"]')
    .should('have.length', 40);

  cy.get('.chakra-modal__close-btn').click();
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
