import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
  static get url() {
    return "/#/register";
  }
  static get email() {
    return cy.get("#emailControl");
  }
  static get password() {
    return cy.get("#passwordControl");
  }
  static get repeatPassword() {
    return cy.get("#repeatPasswordControl");
  }
  //
  static get secQuestion() {
    return cy.get("#mat-select-value-3");
  }
  static get firstChoiceOfSecQuestion() {
    return cy.get(".mat-option-text");
  }
  static get secQuestionAnswer() {
    return cy.get("#securityAnswerControl");
  }
  static get registerBtn() {
    return cy.get("#registerButton");
  }
}

export default RegisterPage;
