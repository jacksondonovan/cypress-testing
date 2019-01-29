describe('Sign A user in and out', () => {

    it('Navigate to EA website', () => {
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

    it('Log Out User', () => {
      cy.get('input[name=Logout]').click()
    })

})
