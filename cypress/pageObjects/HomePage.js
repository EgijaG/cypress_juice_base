import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }
  static get accountBtn() {
    return cy.get("#navbarAccount");
  }
  static get loginBtn() {
    return cy.get("#navbarLoginButton");
  }
  // aria-label="Click to search"
  static get searchBar() {
    return cy.get("#searchQuery");
  }
  static get searchField() {
    return cy.get("input#mat-input-0");
  }
  static get getCardList() {
    return cy.get(
      "[aria-label='Click for more information about the product']"
    );
  }
  static get message() {
    return cy.get(".mat-dialog-content");
  }
  static get closeDialog() {
    return cy.get("button[aria-label='Close Dialog']");
  }
  static get setPerPageBtn() {
    return cy.get("#mat-select-0");
  }
 
  static get set12PerPage() {
    return cy.get("#mat-select-0-panel");
  }
  static get items(){
    return cy.get("mat-grid-tile");
  }
  // id="mat-expansion-panel-header-0"
  static get reviewPanel(){
    return cy.get("mat-expansion-panel-header");
  }
  static get review(){
    return cy.get(".comment");
  }
  static get reviewField(){
    return cy.get("textarea#mat-input-1");
  }
  // aria-label="Send the review"
  
}

export default HomePage;
