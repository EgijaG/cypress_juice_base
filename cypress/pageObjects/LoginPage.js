import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get notCustomerLink() {
    return cy.get("#newCustomerLink");
  }
  static get email() {
    return cy.get("#email");
  }
  static get password() {
    return cy.get("#password");
  }
  static get loginBtn() {
    return cy.get("#loginButton");
  }
}

export default LoginPage;