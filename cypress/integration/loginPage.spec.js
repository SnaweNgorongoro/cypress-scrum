/// <reference types="cypress" />

const locators = require('../fixtures/locators.json')

describe('login case', () => {
    beforeEach('visit gallery app', () => {
        cy.visit('/')
    })

    it('login with valid credentials', () => {
        cy.get(":nth-child(1) > .el-form-item__content > .el-input > .el-input__inner").type('snawe_2@yahoo.co.uk')
        cy.get("[type='password']").type('misica1304')
        cy.get(".vs-u-text--left > .vs-c-btn").click()
        
    })
})
