// cypress/support/commands.ts
export interface AuthTokenResponse {
  success: boolean
  message: string
  data: { access_token: string }
}

Cypress.Commands.add('apiRegister', (username: string, email: string, password: string) => {
  return cy
    .request<AuthTokenResponse>({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/auth/register`,
      body: { username, email, password },
    })
    .then((response) => response.body.data.access_token)
})

Cypress.Commands.add('apiLogin', (username: string, password: string) => {
  return cy
    .request<AuthTokenResponse>({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/auth/login`,
      body: { username, password },
    })
    .then((response) => response.body.data.access_token)
})


// Función auxiliar para simular la persistencia de Zustand en el navegador
function authStorageValue(token: string) {
  if (!token || !token.includes('.')) {
    throw new Error(`El token proporcionado a authStorageValue no es un JWT válido: ${token}`)
  }
  const payload = JSON.parse(atob(token.split('.')[1])) as { id: string }
  return JSON.stringify({
    state: { token, userId: payload.id, isAuthenticated: true },
    version: 0,
  })
}

// Registro de los comandos custom en Cypress
Cypress.Commands.add(
  'loginByApi',
  (username: string, email: string, password: string, path = '/dashboard') => {
    return cy.apiRegister(username, email, password).then((token) => {
      cy.visit(path, {
        onBeforeLoad(win) {
          win.localStorage.setItem('blogapp-auth', authStorageValue(token))
        },
      })
      return cy.wrap(token)
    })
  },
)

Cypress.Commands.add('apiCreateCategory', (name: string) => {
  return cy
    .request<{ data: { id: string } }>({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/categories`,
      body: { name },
    })
    .then((response) => response.body.data.id)
})

Cypress.Commands.add('apiDeleteCategory', (id: string) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/categories/${id}`,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('apiDeletePost', (id: string) => {
  return cy.request({
    method: 'DELETE',
    url: `${Cypress.env('apiUrl')}/posts/${id}`,
    failOnStatusCode: false,
  })
})

// === SECCIÓN 2.4: Tipar los comandos custom ===
declare global {
  namespace Cypress {
    interface Chainable {
      apiRegister(username: string, email: string, password: string): Chainable<string>
      apiLogin(username: string, password: string): Chainable<string>
      loginByApi(
        username: string,
        email: string,
        password: string,
        path?: string,
      ): Chainable<string>
      apiCreateCategory(name: string): Chainable<string>
      apiDeleteCategory(id: string): Chainable<unknown>
      apiDeletePost(id: string): Chainable<unknown>
    }
  }
}