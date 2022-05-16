import BasePage from "../pageObjects/basePage";

class SavedAddresses extends BasePage {
  static get url() {
    return "/#/address/saved";
  }
  static get addAddressBtn() {
    return cy.get("[aria-label='Add a new address']");
  }
  static get country() {
    return cy.get("#mat-input-1");
  }
  static get name() {
    return cy.get("#mat-input-2");
  }
  static get mobilePhone() {
    return cy.get("#mat-input-3");
  }
  static get zip() {
    return cy.get("#mat-input-4");
  }
  static get address() {
    return cy.get("#address");
  }
  static get city() {
    return cy.get("#mat-input-6");
  }
  static get state() {
    return cy.get("#mat-input-7");
  }
  
}

export default SavedAddresses;
