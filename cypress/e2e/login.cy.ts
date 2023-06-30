describe("Login to access aplication", () => {
  it("Login and access home app", () => {
    cy.visit(`${Cypress.env("appAdress")}/login`);
    cy.get("#email").type("admin@admin.com");
    cy.get("#password").type("Admin123");
    cy.get("#loginButton").click();
    cy.get(".mantine-Notification-title").should(
      "have.text",
      "Login feito com sucesso"
    );
  });
});

export {};
