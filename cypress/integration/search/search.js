import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';

import Search from '../page_objects/SearchPage';

const SearchPage = new Search();

Given('I open the Search page', () => {
	cy.visit(Cypress.env('SEARCH_URL'));
});

When('I do a search for {string}', (searchTerm) => {
	SearchPage.doSearch(searchTerm);
});

