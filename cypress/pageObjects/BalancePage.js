import BasePage from "../pageObjects/basePage";

class BalancePage extends BasePage {
  static get url() {
    return "/#/wallet";
  }
  static get addMoney() {
    return cy.get("#mat-input-1");
  }
  static get paymTable() {
    return cy.get(".mat-radio-inner-circle");
  }
  static get continueBtn() {
    return cy.get("[aria-label='Proceed to review']");
  }
  static get balance() {
    return cy.get(".confirmation");
  }
}

export default BalancePage;
