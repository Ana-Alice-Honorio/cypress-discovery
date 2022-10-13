

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
      cy.viewport(1440, 900)
      cy.visit('https://buger-eats.vercel.app')

      cy.get('a[href="/deliver]').click()
    })
})