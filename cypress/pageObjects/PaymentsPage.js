import BasePage from "../pageObjects/basePage";

class PaymentsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }
  static get addPaymentCard() {
    return cy.get(".mat-expansion-panel");
  }
  static get name() {
    return cy.get("#mat-input-1");
  }
  static get cardNum() {
    return cy.get("#mat-input-2");
  }
  static get expiryMonth() {
    return cy.get("#mat-input-3");
  }
  static get expYear() {
    return cy.get("#mat-input-4");
  }
  static get paymTable(){
      return cy.get("mat-table>mat-row");
  }
 
}

export default PaymentsPage;
