describe('My first cypress test', () => {

    it('Navigate to Google.com', () => {
      cy.visit('http://executeautomation.com/demosite/Login.html');
    })

    it('Login to application', () => {
      cy.get('input[name=UserName]').type("admin")
      cy.get('input[name=Password]').type("password")
      cy.get('input[name=Login]').click()
    })

    it('Enter User Details', () => {
      cy.get('#TitleId').select('Ms.')
      cy.get('#Initial').type('KK.')
      cy.get('#FirstName').type('Karthik')
      cy.get('input[name=Hindi]').click()
    })

})
