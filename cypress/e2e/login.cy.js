describe('this is for login', ()=>{
    it('verify login functionality', () =>{

        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('#uname').type('test')
        cy.get('#pwd').type('test')
        cy.contains('Login').click()
    })
})