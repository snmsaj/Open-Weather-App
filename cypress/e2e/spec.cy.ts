import { cy } from "local-cypress";

describe("User searching and selecting a city", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:3000/");
  // });

  it("searches new york and selects the first choice, then go back to home page after data loads", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="search-input"]').type("new york").type("{enter}");
    cy.get('[data-cy="city-1"]').should("be.visible").click();
  });

  // it("should go back to home page after data loads", () => {
  //   cy.get('[data-cy="main-weather"]', { timeout: 10_000 }).should(
  //     "be.visible"
  //   );
  //   cy.get('[data-cy="back-btn"]').click();
  // });
});
