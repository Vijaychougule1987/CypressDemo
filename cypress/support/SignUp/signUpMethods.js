import SignUpObjects from './SignUpObjects';
    
    const signUpObject = new SignUpObjects();
    let	emailAddress;
    let password;
    let	inboxId;

class SignUp 
{
    
    signUpWithNewUser(){
        cy.createInbox().then(inbox => {
			// verify a new inbox was created
			assert.isDefined(inbox);

			// save the inboxId for later checking the emails
		inboxId = inbox.id;
		emailAddress = inbox.emailAddress;
        password="Test@1234";
        
        cy.get(signUpObject.getFirstNameSelector()).type('John')
        cy.get(signUpObject.getLastNameSelector()).type('Watson')
        cy.get(signUpObject.getEmailSelector()).type(emailAddress)
        cy.get(signUpObject.getPasswordSelector()).type(password)
        cy.get('.styles_checkBox__3AANN').click()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.get('.styles_navRight__1UesG > .navbar-nav > .nav-item > .styles_root__2Rgnn').should('have.text','Log out')
        cy.get('.styles_navRight__1UesG > .navbar-nav > .nav-item > .styles_root__2Rgnn').click().wait(2000)
    });
    }

    invalidPasswordFormat()
    {
        cy.createInbox().then(inbox => {
			// verify a new inbox was created
			assert.isDefined(inbox);

			// save the inboxId for later checking the emails
		inboxId = inbox.id;
		emailAddress = inbox.emailAddress;

        cy.get(signUpObject.getFirstNameSelector()).type('John')
        cy.get(signUpObject.getLastNameSelector()).type('Watson')
        cy.get(signUpObject.getEmailSelector()).type(emailAddress)
        cy.get(signUpObject.getPasswordSelector()).type('123456')
        cy.get('.styles_checkBox__3AANN').click()
        cy.get('button[type="submit"]').click().wait(2000)
        cy.get('.styles_inputs__2jdA8 > .text-warning').should('include.text','Password must have at least 8 characters that include at least 1 uppercase character and 1 lowercase character')
    });
    }

    invalidFirstnameAndLastname()
    {
    cy.get(signUpObject.getFirstNameSelector()).type('124545')
    cy.get(signUpObject.getLastNameSelector()).type('794556')
    cy.get(signUpObject.getEmailSelector()).type(emailAddress)
    cy.get(signUpObject.getPasswordSelector()).type(password)
    cy.get('.styles_checkBox__3AANN').click()
    cy.get('button[type="submit"]').click()
    }

    termsOfUserAndPolicy()
    {
    cy.get(signUpObject.getTermsOfUseSelector()).click()
    cy.get('h3').should('include.text','FIRST REACH TERMS OF USE')
    cy.get(signUpObject.getcloseIconSelector()).click()
    cy.get(signUpObject.getPrivacyPolicySelector()).click()
    cy.get('h3').should('include.text','FIRST REACH PRIVACY POLICY')
    cy.get(signUpObject.getcloseIconSelector()).click()
    cy.get(signUpObject.getInformedConsentSelector()).click()
    cy.get('h3').should('include.text','Informed Consent for Telehealth Services')
    }

    verifyLoginLink()
    {
    cy.get(signUpObject.getLoginLinkSelector()).click()
    cy.get('h3').should('include.text','Log In')
    cy.get(signUpObject.getcloseIconSelector()).click()
    }
}  
export default SignUp;
