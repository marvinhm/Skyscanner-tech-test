describe("Smoke Test", () => {
  it("Should return true", () => {
    cy.visit("http://localhost:3000");

    cy.get(["data-test='flightSelectButton'"])
      .click()
  })
});