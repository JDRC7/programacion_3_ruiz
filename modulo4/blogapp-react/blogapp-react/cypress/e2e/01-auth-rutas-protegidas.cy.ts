// cypress/e2e/01-auth-rutas-protegidas.cy.ts
import { uniqueEmail, uniqueUsername } from '../support/utils'


describe('Registro', () => {
  it('permite crear una cuenta nueva y redirige al home', () => {
    const username = uniqueUsername()
    const email = uniqueEmail()

    cy.visit('/register')
    cy.get('#username').type(username)
    cy.get('#email').type(email)
    cy.get('#password').type('secret123')
    cy.contains('button', 'Registrarme').click()

    cy.location('pathname').should('eq', '/')
  })
})


describe('Login', () => {
  let username: string
  let password: string

  before(() => {
    username = uniqueUsername()
    password = 'secret123'
    // Registramos el usuario directo por API para acelerar la prueba
    cy.apiRegister(username, uniqueEmail(), password)
  })

  it('permite iniciar sesión con credenciales válidas', () => {
    cy.visit('/login')
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains('button', 'Ingresar').click()

    cy.location('pathname').should('eq', '/')
  })

  it('muestra un error con credenciales inválidas', () => {
    cy.on('uncaught:exception', () => false)

    cy.visit('/login')
    cy.get('#username').type(username)
    cy.get('#password').type('contraseña-incorrecta')
    cy.contains('button', 'Ingresar').click()

    cy.contains('Invalid credentials').should('be.visible')
    cy.location('pathname').should('eq', '/login')
  })
})


describe('Rutas protegidas', () => {
  it('redirige a /login si se accede sin sesión', () => {
    cy.visit('/categorias')
    cy.location('pathname').should('eq', '/login')
  })

  it('el logout limpia el token y vuelve a redirigir', () => {
    cy.loginByApi(uniqueUsername(), uniqueEmail(), 'secret123', '/categorias')
    cy.location('pathname').should('eq', '/categorias')
    cy.contains('aside button', 'Salir').click()
    cy.location('pathname').should('not.eq', '/categorias')
    cy.visit('/categorias')
    cy.location('pathname').should('eq', '/login')
  })
})