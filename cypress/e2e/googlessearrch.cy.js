describe('google search', () => {
  it('this test is verify html report', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Vision Tech GH').type('{enter}')
    cy.log('end of first google search');
  })

  it('this is second test', () => {
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('Vision IT Centre').type('{enter}')
    cy.log('end of second google search')
  })


})