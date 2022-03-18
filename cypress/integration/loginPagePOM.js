/// <reference types="cypress" />

const { loginPage } = require("../pageObjects/loginPage")

const login = new loginPage()

it('login case POM', ()=>{

    

    cy.visit('/')
    cy.get(":nth-child(1) > .el-form-item__content > .el-input > .el-input__inner").type('snawe_2@yahoo.co.uk')
    cy.get("[type='password']").type('misica1304')
    cy.get(".vs-u-text--left > .vs-c-btn").click()
})