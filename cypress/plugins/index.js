/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	on('file:preprocessor', cucumber());
	// `config` is the resolved Cypress config
};
