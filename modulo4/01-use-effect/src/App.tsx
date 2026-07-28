// src/App.tsx

import DocumentTitle    from './components/DocumentTitle'
import OnlineStatus     from './components/OnlineStatus'
import WindowSize       from './components/WindowSize'
import LiveClock        from './components/LiveClock'
import SearchWithEffect from './components/SearchWithEffect'
import DebounceSearch   from './components/DebounceSearch'
import FetchUser        from './components/FetchUser'
import AutoFocusInput   from './components/AutoFocusInput'

export default function App() {
  return (
    <main style={{ maxWidth: 650, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Ejercicios de useEffect</h1>

      <section style={{ marginBottom: 30 }}>
        <h3>1. DocumentTitle</h3>
        <DocumentTitle />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>2. OnlineStatus</h3>
        <OnlineStatus />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>3. WindowSize</h3>
        <WindowSize />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>4. LiveClock</h3>
        <LiveClock />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>5. SearchWithEffect</h3>
        <SearchWithEffect />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>6. DebounceSearch</h3>
        <DebounceSearch />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>7. FetchUser</h3>
        <FetchUser />
      </section>

      <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 30 }}>
        <h3>8. AutoFocusInput</h3>
        <AutoFocusInput />
      </section>
    </main>
  )
}