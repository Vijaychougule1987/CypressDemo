/// <reference types="Cypress" />
import SignUp from '../../support/SignUp/signUpMethods';

const signUpPage = new SignUp()

describe('My First Sign Up Suite',function()
{
    this.beforeEach(function () {
		cy.visit(Cypress.env('signUpUrl'),{failOnStatusCode: false});
        return cy.mailslurp();
    });

    it('Sign Up with new user',function(){
        signUpPage.signUpWithNewUser();
    });
    it('Verify message by entering invalid password format',function(){
        signUpPage.invalidPasswordFormat();
    });
    it('Verify message by entering numbers in the first name and last name fields',function(){
        signUpPage.invalidFirstnameAndLastname();
    });
    it('Verify "Terms of Use" and "Privacy Policy" links are functional',function(){
        signUpPage.termsOfUserAndPolicy();
    });
    it('Verify "Log In" link is functional',function(){
        signUpPage.verifyLoginLink();
    });
})
