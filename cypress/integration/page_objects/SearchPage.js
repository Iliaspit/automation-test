/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// TODO exclude automation from those rules
class SearchPage {
	getSearchField() {
		return cy.get('input');
	}
	
	doSearch(searchTerm) {
		// to be added
	}
}

export default SearchPage;
