describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8001/dev/index.html')
    cy.get("my-element").shadow("h1")
        .contains("Hello, World")
  })
})