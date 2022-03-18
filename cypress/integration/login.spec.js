/// <reference types="cypress" />

it('login test with valid credentials', () => {
    cy.visit('/')
    cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('snawe_2@yahoo.co.uk')
    cy.get('[type="password"]').type('misica1304')
    cy.get('.vs-u-text--left > .vs-c-btn').click()
    
    cy.get('.vs-c-my-organization__header--add-new > .vs-c-my-organization__title').wait(5000).click()
    cy.get('input').type('Organ')
    cy.get('[name="next_btn"]').contains('Next').click()
    cy.get('[name="next_btn"]').contains('Create').click()
    cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
    cy.get('.vs-c-organization-boards__item--add-new').click()
    cy.get('.vs-input-border > input').type('Organ-board')
    cy.get('[name="next_btn"]').contains('Next').click()
    cy.get('input[type=radio]').check('scrum_board', {force: true})
    cy.get('[name="next_btn"]').click()
    cy.get('[name="next_btn"]').click()
    cy.get('[name="next_btn"]').wait(10000).contains('Finish').click()
    
    

    
    

    


})