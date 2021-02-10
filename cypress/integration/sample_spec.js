describe('My First Test', function() {
    it('Does not do much!', function() {
        cy.visit('localhost:4100');

        cy.contains('Sign in').click();

        cy.get('input[type=email]').type("example@lol.fr")
        cy.get('input[type=password]').type("example**123")
        cy.get('button[type=submit]').click();
        cy.contains('No articles are here... yet.')
    })
})
