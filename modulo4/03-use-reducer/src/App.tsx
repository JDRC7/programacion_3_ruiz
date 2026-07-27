// src/App.tsx

import BasicCounter from './components/BasicCounter'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       │
// │  1  AutoFocusForm    — foco automático y salto de campo con Enter   │
// │  2  Stopwatch        — interval guardado en ref, sin re-renders     │
// │  3  InlineEditor     — leer un input sin useState (ref no controlado)│
// │  4  PreviousValue    — guardar el valor anterior de un input        │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function App() {
  const content =
  PASO === 1 ? <BasicCounter /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}