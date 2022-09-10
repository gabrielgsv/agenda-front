describe("Login to access aplication", () => {
  it("Login and access home app", () => {
    cy.visit(`${Cypress.env("appAdress")}/login`);
    cy.get("#mantine-r1").type("admin@admin.com");
    cy.get("#mantine-r3").type("Admin123");
    cy.get(
      ".mantine-Group-root > .mantine-UnstyledButton-root > .mantine-3xbgk5 > .mantine-qo1k2"
    ).click();
    cy.get(".mantine-Notification-title").should("be.visible");
    cy.get(".mantine-Notification-title").should(
      "have.text",
      "Login feito com sucesso"
    );
  });
});
