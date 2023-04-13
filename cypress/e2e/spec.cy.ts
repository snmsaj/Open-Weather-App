import { context, cy } from "local-cypress";

describe("User Journey", () => {
  context("Search City", () => {
    it("search city and select city to load weather page", () => {
      cy.visit("http://localhost:3000/");
      cy.get('[data-cy="search-input"]').type("new york").type("{enter}");
      cy.get('[data-cy="city-0"]').should("be.visible").click();
      cy.location("pathname").should("eq", "/weather");
      // cy.get('[data-cy="back-btn"]').should("be.visible").click();
    });
  });
});
