// src/App.tsx

import { ThemeProvider }    from './theme/ThemeContext'
import CssGlobalDemo        from './components/CssGlobalDemo'
import InlineStyleDemo      from './components/InlineStyleDemo'
import CssModuleDemo        from './components/CssModuleDemo'
import StyledComponentsDemo from './components/StyledComponentsDemo'
import LiveStyleEditor      from './components/LiveStyleEditor'
import HoverDemo            from './components/HoverDemo'
import ThemePanel           from './components/ThemePanel'
import './theme/theme.css'

export default function App() {
  return (
    <ThemeProvider>
      <main style={{ maxWidth: 700, margin: '0 auto', padding: '32px 16px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Demos de Estilos en React</h1>

        {/* 1. CSS Global */}
        <section style={{ marginBottom: 30 }}>
          <CssGlobalDemo />
        </section>

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed var(--border)' }} />

        {/* 2. Inline Styles */}
        <section style={{ marginBottom: 30 }}>
          <InlineStyleDemo />
        </section>

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed var(--border)' }} />

        {/* 3. CSS Modules */}
        <section style={{ marginBottom: 30 }}>
          <CssModuleDemo />
        </section>

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed var(--border)' }} />

        {/* 4. Styled Components */}
        <section style={{ marginBottom: 30 }}>
          <StyledComponentsDemo />
        </section>

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed var(--border)' }} />

        {/* 5. Live Style Editor (Hook useStyles) */}
        <section style={{ marginBottom: 30 }}>
          <LiveStyleEditor />
        </section>

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed var(--border)' }} />

        {/* 6. Hook useHover Demo */}
        <section style={{ marginBottom: 30 }}>
          <HoverDemo />
        </section>

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed var(--border)' }} />

        {/* 7. Theme Panel (Context + Variables CSS) */}
        <section style={{ marginBottom: 30 }}>
          <ThemePanel />
        </section>
      </main>
    </ThemeProvider>
  )
}