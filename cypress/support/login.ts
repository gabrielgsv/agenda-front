export const login = () => {
  cy.request({
    method: "POST",
    url: `${Cypress.env("urlApi")}/login`,
    body: {
      email: "admin@admin.com",
      password: "Admin123",
    },
  }).then((res) => {
    window.sessionStorage.setItem(btoa("Token"), res.body.access_token);
  });
};
