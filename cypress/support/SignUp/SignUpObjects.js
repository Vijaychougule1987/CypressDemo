class SignUpObjects
{
    //First Name Selector
    getFirstNameSelector() {
		return '[placeholder="First Name"]';
	}

    //Last Name Selector
    getLastNameSelector() {
		return 'input[placeholder="Last Name"]';
	}

    //Email Selector
    getEmailSelector() {
		return 'input[placeholder="Email"]';
	}

    //Password Selector
    getPasswordSelector() {
		return 'input[placeholder="Password"]';
	}

    //Confirm Password Selector
    getConfirmPasswordSelector() {
		return 'input[placeholder="Confirm Password"]';
	}

    //Terms of Use link selector
    getTermsOfUseSelector() {
        return '.styles_contents__23OoY > :nth-child(1)';
    }

    //Privacy Policy link selector
    getPrivacyPolicySelector() {
        return '.styles_contents__23OoY > :nth-child(2)';
    }

    //Informed Consent link selector
    getInformedConsentSelector() {
        return '.styles_contents__23OoY > :nth-child(3)';
    }

    //Login link selector
    getLoginLinkSelector() {
        return '.text-center .styles_root__2Rgnn';
    }
    
    //Close icon selector
    getcloseIconSelector() {
        return '.ReactModal__Content > .btn > .fa';
    }

}
export default SignUpObjects;