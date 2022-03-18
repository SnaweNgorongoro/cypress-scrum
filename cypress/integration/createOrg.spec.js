/// <reference types="cypress" />



describe('create organization', () => {
    before('visit gallery app', () => {
        cy.visit('/')
    })

    it('create org', ()=>{
        cy.visit('/create')
        loginPage.login('snawe2@yahoo.co.uk, 'misica1304');
        cy.wait(1000);
        cy.get('.nav-link').eq(2).click();
        createGallery.create(galleryData.title, galleryData.description, galleryData.url);
        
    });
})
