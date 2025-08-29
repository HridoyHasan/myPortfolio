describe('HomePage Test', () => {
  it('should load the homepage and display key sections', () => {
    // Visit the homepage
    cy.visit('/');

    // Check for the presence of the Experience section
    cy.contains('Experience').should('be.visible');

    // Check for the presence of the Projects section
    cy.contains('Projects').should('be.visible');
  });
});
