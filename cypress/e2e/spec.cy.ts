import { context, cy } from "local-cypress";

describe("User Journey", () => {
  context("Search First City", () => {
    it("search city and select city to load weather page", () => {
      cy.visit("http://localhost:3000/");
      cy.get('[data-cy="search-input"]').type("new york").type("{enter}");
      cy.get('[data-cy="city-0"]').should("be.visible").click();
      cy.location("pathname").should("eq", "/weather");
    });
  });

  context("Search Second City", () => {
    it("goes back to home and search another city", () => {
      cy.visit(
        "http://localhost:3000/weather?city=New+York+County&country=US&lat=40.7127281&lon=-74.0060152"
      );
      cy.get('[data-cy="back-btn"]').should("be.visible").click();
      cy.location("pathname").should("eq", "/");
      cy.get('[data-cy="search-input"]').type("atlanta").type("{enter}");
      cy.get('[data-cy="city-0"]').should("be.visible").click();
      cy.location("pathname").should("eq", "/weather");
    });
  });
});
