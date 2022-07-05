const { MailSlurp } = require('mailslurp-client');

Cypress.Commands.add('createInbox', () => {
	const mailslurp = new MailSlurp({ apiKey: Cypress.env('MAILSLURP_API_KEY') });
	return mailslurp.createInbox();
});
