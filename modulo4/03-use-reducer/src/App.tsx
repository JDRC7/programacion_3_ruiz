// src/App.tsx

import BasicCounter from './components/BasicCounter'
import RegistrationForm from './components/RegistrationForm'

export default function App() {
  return (
    <main style={{ maxWidth: 550, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Ejercicios de useReducer</h1>

      <section style={{ marginBottom: 30 }}>
        <h3>1. Contador Básico</h3>
        <BasicCounter />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>2. Formulario de Registro</h3>
        <RegistrationForm />
      </section>
    </main>
  )
}