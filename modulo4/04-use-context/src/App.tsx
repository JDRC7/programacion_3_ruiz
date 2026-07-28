// src/App.tsx

import { useAuth }  from './contexts/AuthContext'
import AppHeader    from './components/AppHeader'
import LoginForm    from './components/LoginForm'
import ThemeToggle  from './components/ThemeToggle'
import UserBadge    from './components/UserBadge'

export default function App() {
  const { state } = useAuth()

  return (
    <main style={{ maxWidth: 650, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>Ejercicios de useContext</h1>

      {state.user && (
        <p style={{ marginBottom: 24, fontSize: 14, color: '#6b7280', textAlign: 'center' }}>
          Sesión activa: <strong>{state.user.name}</strong>
        </p>
      )}

      {/* --- PASO 1: ThemeToggle --- */}
      <section style={{ marginBottom: 30 }}>
        <h3>1. ThemeToggle (Cambio de tema)</h3>
        <ThemeToggle />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      {/* --- PASO 2: UserBadge --- */}
      <section style={{ marginBottom: 30 }}>
        <h3>2. UserBadge (Estado de Usuario)</h3>
        <UserBadge />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      {/* --- PASO 3: LoginForm --- */}
      <section style={{ marginBottom: 30 }}>
        <h3>3. LoginForm (Formulario Auth)</h3>
        <LoginForm />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      {/* --- PASO 4: AppHeader --- */}
      <section style={{ marginBottom: 30 }}>
        <h3>4. AppHeader (Header Multi-contexto)</h3>
        <AppHeader />
      </section>
    </main>
  )
}