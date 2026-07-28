import './commands'

// Puedes mantener aquí también el manejador de excepciones para que no se rompa por el error 500
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

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

// Comandos Personalizados de Cypress
Cypress.Commands.add(
  'loginByApi',
  (username: string, email: string, password: string, path = '/dashboard') => {
    // Nota: 'apiRegister' debe estar declarado previamente en tus comandos
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

// Tipados de TypeScript para que Cypress reconozca tus nuevos comandos en los archivos .cy.ts
declare global {
  namespace Cypress {
    interface Chainable {
      loginByApi(username: string, email: string, password: string, path?: string): Chainable<string>
      apiRegister(username: string, email: string, password: string): Chainable<string>
      apiCreateCategory(name: string): Chainable<string>
      apiDeleteCategory(id: string): Chainable<any>
      apiDeletePost(id: string): Chainable<any>
    }
  }
}