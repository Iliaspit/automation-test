module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:cypress/recommended',
	],
	plugins: ['@typescript-eslint', 'eslint-plugin-cypress'],
	env: {
		'cypress/globals': true,
	},
};
