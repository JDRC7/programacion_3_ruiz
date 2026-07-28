// src/App.tsx

import AutoFocusForm from './components/AutoFocusForm'
import Stopwatch     from './components/Stopwatch'
import InlineEditor  from './components/InlineEditor'
import PreviousValue from './components/PreviousValue'

export default function App() {
  return (
    <main style={{ maxWidth: 550, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Ejercicios de useRef</h1>

      <section style={{ marginBottom: 30 }}>
        <h3>1. AutoFocusForm</h3>
        <AutoFocusForm />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>2. Stopwatch</h3>
        <Stopwatch />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>3. InlineEditor</h3>
        <InlineEditor />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>4. PreviousValue</h3>
        <PreviousValue />
      </section>
    </main>
  )
}