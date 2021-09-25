describe("Testing the demo", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("can add new task", () => {
    const newTask = "lorem ipsum from cypress " + Math.floor(Date.now() / 1000);
    cy.get("textarea").click();
    cy.get("textarea").type(`${newTask}`);
    cy.get(".mobile button.bg-blue-600").click();
    cy.wait(5000);
    cy.get(".task-item").first().should("have.text", newTask);
  });
});
