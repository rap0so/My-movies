it('should go to `/my-list` when `/my-list` is visited', () => {
  cy.visit('/my-list');

  cy.contains('My List').click();

  cy.location('pathname').should('eq', '/my-list');
});

it('should go to `/my-list` when click on navbar link', () => {
  cy.visit('/');

  cy.contains('My List').click();

  cy.location('pathname').should('eq', '/my-list');
});

it('should list movies added to the list', () => {
  //   const localStorage = {
  //     335787: {
  //       poster:
  //         'https://image.tmdb.org/t/p/w500//7F4ji3bowguRGR6bRgrPZAKlpyU.jpg',
  //       title: 'Uncharted',
  //       description:
  //         'A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.',
  //       id: 335787,
  //     },
  //     646385: {
  //       poster:
  //         'https://image.tmdb.org/t/p/w500//kZNHR1upJKF3eTzdgl5V8s8a4C3.jpg',
  //       title: 'Scream',
  //       description:
  //         'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
  //       id: 646385,
  //     },
  //   };
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
