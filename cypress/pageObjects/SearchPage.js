import BasePage from "../pageObjects/basePage";

class SearchPage extends BasePage {
  static get url() {
    return "/#/search";
  }
  static get demoUser() {
    return cy.get("button[aria-label='Go to user profile']");
  }
  static get accountBtn() {
    return cy.get("#navbarAccount");
  }

}

export default SearchPage;
