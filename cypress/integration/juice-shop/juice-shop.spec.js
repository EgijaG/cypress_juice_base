import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegisterPage from "../../pageObjects/RegisterPage";
import Basepage from "../../pageObjects/Basepage";
import SearchPage from "../../pageObjects/SearchPage";
import SavedAddresses from "../../pageObjects/SavedAddresses";
import BasePage from "../../pageObjects/Basepage";
import PaymentsPage from "../../pageObjects/PaymentsPage";
import BalancePage from "../../pageObjects/BalancePage";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
    HomePage.accountBtn.click();
    HomePage.loginBtn.click();
    LoginPage.notCustomerLink.click();
    RegisterPage.email.type(
      "armpit" + Math.floor(Math.random() * 10000) + "@hair.lol"
    );
    RegisterPage.password.type("beetlejuice");
    RegisterPage.repeatPassword.type("beetlejuice");
    RegisterPage.secQuestion.click();
    RegisterPage.firstChoiceOfSecQuestion.eq(0).click();
    RegisterPage.secQuestionAnswer.type("beetlejuice");
    RegisterPage.registerBtn.click();
    Basepage.toastMessage.should(
      "contain",
      "Registration completed successfully. You can now log in."
    );
  });

  it("Login", () => {
    HomePage.accountBtn.click();
    HomePage.loginBtn.click();
    LoginPage.email.type("demo");
    LoginPage.password.type("demo");
    LoginPage.loginBtn.click();
    ``;
    SearchPage.accountBtn.click();
    SearchPage.demoUser.should("contain", "demo");
  });
});
describe("Juice-shop, autologin", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });
  it.only("Autologin", () => {
    // Search and validate Lemon
    HomePage.searchBar.click();
    // - Search for Lemon
    HomePage.searchField.type("lemon{enter}");
    // - Click on Lemon card
    HomePage.getCardList.contains("Lemon").click();
    // Validate - "Sour but full of vitamins."
    HomePage.message.should("contain", "Sour but full of vitamins.");
  });
  it.only("500 ml", () => {
    // Search 500ml and validate Lemon

    HomePage.searchBar.click();
    // - Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // - Click on Lemon card
    HomePage.getCardList.contains("Lemon").click();
    // Validate - "Sour but full of vitamins."
    HomePage.message.should("contain", "Sour but full of vitamins.");
    HomePage.closeDialog.click();
  });
  it.only("All cards", () => {
    // Search 500ml and validate All cards
    HomePage.searchBar.click();
    // - Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // - Click on Lemon card
    HomePage.getCardList.contains("Eggfruit").click();
    HomePage.message.should("contain", "Now with even more exotic flavour.");
    HomePage.closeDialog.click();
    HomePage.getCardList.contains("Lemon").click();
    HomePage.message.should("contain", "Sour but full of vitamins.");
    HomePage.closeDialog.click();
    HomePage.getCardList.contains("Strawberry").click();
    HomePage.message.should("contain", "Sweet & tasty!");
  });
  it.only("All cards", () => {
    // Validate different sets of available cards -> 12, 24, 36

    // Set Items per page to 12
    HomePage.setPerPageBtn.click();
    HomePage.set12PerPage.contains("12").click();
    // Validate that we see 12 items
    HomePage.items.should("have.length", 12);
    // Set Items per page to 24
    HomePage.setPerPageBtn.click();
    HomePage.set12PerPage.contains("24").click();
    // Validate that we see 24 items
    HomePage.items.should("have.length", 24);
    // Set Items per page to 36
    HomePage.setPerPageBtn.click();
    HomePage.set12PerPage.contains("36").click();
    // Validate that we see 35 items
    HomePage.items.should("have.length", 35);
  });

  it.only("Review", () => {
    // Read a review for King
    HomePage.searchBar.click();

    // - Search for King
    HomePage.searchField.type("King{enter}");
    // - Validate that the review contains "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
    HomePage.getCardList.contains("King").click();
    HomePage.reviewPanel.wait(200).click();

    HomePage.review.should("contain", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it.only("Writing review", () => {
    // Add a review for Raspberry

    // - Search for Raspberry
    HomePage.searchBar.click();
    HomePage.searchField.type("Raspberry{enter}");
    // - Add review => "Tastes like metal"
    HomePage.getCardList.contains("Raspberry").click();
    HomePage.reviewField.click();
    HomePage.reviewField.type("Tastes like metal");
    BasePage.subButton.click();

    // - Validate that review contains "Tastes like metal"
    HomePage.reviewPanel.wait(200).click();
    HomePage.review.should("contain", "Tastes like metal");
  });

  it.only("Add-adresses", () => {
    // Add address
    HomePage.accountBtn.click();
    // Open Saved addresses page (/#/address/saved) (directly)
    SavedAddresses.visit();
    // Add new address (add all info)
    cy.get("body").click(0, 0);
    SavedAddresses.addAddressBtn.click();
    SavedAddresses.country.type("demo");
    SavedAddresses.name.type("demo");
    SavedAddresses.mobilePhone.type(Math.floor(Math.random() * 1000000000));

    SavedAddresses.zip.type("demo");
    // SavedAddresses.address.click();
    SavedAddresses.address.type("demo");
    SavedAddresses.city.type("demo");
    SavedAddresses.state.type("demo");
    BasePage.subButton.click();
    // validate newly added address
    BasePage.toastMessage.should(
      "contain",
      "has been successfully added to your addresses."
    );
  });

  it.only("Add payment method", () => {
    // Add Payment option
    // Open Saved payments page (/#/saved-payment-methods) (directly)
    PaymentsPage.visit();
    // Add new card (name, card number, expiry date)
    PaymentsPage.addPaymentCard.wait(200).click();
    PaymentsPage.name.type("Beetle Juice");
    PaymentsPage.cardNum.type(
      "5573" + Math.floor(Math.random() * 1000000000000)
    );
    PaymentsPage.expiryMonth.select(0);
    PaymentsPage.expYear.select(0);
    BasePage.subButton.click();

    // Validate that card is added
    PaymentsPage.paymTable.should("contain", "Beetle Juice");
  });

  it.only("Increase wallet balance", () => {
    // Increase Wallet Balance
    // Open wallet page (/#/wallet) (directly)
    BalancePage.visit();
    // Save current balance amount
    BalancePage.balance.should("be.visible").then((el) => {
      cy.wrap(el.text()).as("currentBalanceValue");
    });
    // Add 100
    BalancePage.addMoney.type("100");
    BasePage.subButton.wait(1000).click();
    BalancePage.paymTable.eq(0).click();
    BalancePage.continueBtn.click();

    // Validate that balance has increased by 100
    BasePage.toastMessage.should("contain", "Wallet successfully charged.");
    // BalancePage.balance.should("be.visible").then((el) => {
    //   cy.get("@currentBalanceValue").then((value) => {
    //     expect(parseFloat(el.text())).to.eq(parseFloat(value) + amount);
    //   });
    // });
  });
});
