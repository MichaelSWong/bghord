// describe('review', () => {
//   beforeEach(() => cy.visit('/'));

//   it('should display welcome message', () => {
//     // Custom command example, see `../support/commands.ts` file
//     //cy.login('my-email@something.com', 'myPassword');
//     cy.contains('Board Game Hoard: Review');

//     // Function helper example, see `../support/app.po.ts` file
//   });
// });

describe('review game list', () => {
  beforeEach(() => cy.visit('/'));

  it('shoud display a list of games', () => {
    cy.contains('Board Game Hoard: Reviews');

    cy.contains('a', 'Settlers in the Can').within(() => {
      cy.contains('/5');
      cy.contains('$35.00');
    });
    cy.contains('a', 'Chess Pie').within(() => {
      cy.contains('/5');
      cy.contains('$15.00');
    });
    cy.contains('a', 'Purrfection').within(() => {
      cy.contains('/5');
      cy.contains('$45.00');
    });
  });
});
