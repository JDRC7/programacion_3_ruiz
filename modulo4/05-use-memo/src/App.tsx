// src/App.tsx

import PrimeSieve       from './components/PrimeSieve'
import FilteredCatalog   from './components/FilteredCatalog'
import OrderMetrics      from './components/OrderMetrics'
import MultiTagFilter    from './components/MultiTagFilter'
import MemoizedList     from './components/MemoizedList'
import ModalDemo        from './components/ModalDemo'
import ThemeSelector    from './components/ThemeSelector'
import PostList         from './components/PostList'

export default function App() {
  return (
    <main style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Vista General de Componentes</h1>

      {/* --- USE MEMO --- */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: 8 }}>useMemo</h2>
        
        <h3>1. PrimeSieve</h3>
        <PrimeSieve />
        
        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

        <h3>2. FilteredCatalog</h3>
        <FilteredCatalog />

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

        <h3>3. OrderMetrics</h3>
        <OrderMetrics />

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

        <h3>4. MultiTagFilter</h3>
        <MultiTagFilter />
      </section>

      {/* --- USE CALLBACK --- */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: 8 }}>useCallback</h2>

        <h3>5. MemoizedList</h3>
        <MemoizedList />
      </section>

      {/* --- HOOKS PERSONALIZADOS --- */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ borderBottom: '2px solid #ccc', paddingBottom: 8 }}>Hooks Personalizados</h2>

        <h3>9. ModalDemo</h3>
        <ModalDemo />

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

        <h3>11. ThemeSelector</h3>
        <ThemeSelector />

        <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

        <h3>13. PostList</h3>
        <PostList />
      </section>
    </main>
  )
}