// src/App.tsx

import HomeDashboard from './pages/HomeDashboard'
import AboutPage from './pages/AboutPage'

// Si deseas ver los laboratorios o demos de Ant Design, puedes importar tus componentes de /lab:
import LabAntButtons from './lab/LabAntButtons'
import LabAntCard from './lab/LabAntCard'
import LabAntTable from './lab/LabAntTable'
import LabAntForm from './lab/LabAntForm'
import LabAntAlert from './lab/LabAntAlert'

export default function App() {
  return (
    <main style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: 1100, margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Ant Design App</h1>

      {/* --- SECCIÓN DE PÁGINAS PRINCIPALES --- */}
      <section style={{ marginBottom: 40 }}>
        <h2>1. Home Dashboard</h2>
        <HomeDashboard />
      </section>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      <section style={{ marginBottom: 40 }}>
        <h2>2. About Page</h2>
        <AboutPage />
      </section>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      {/* --- SECCIÓN DE COMPONENTES LAB --- */}
      <section style={{ marginBottom: 40 }}>
        <h2>3. Componentes de Laboratorio (Lab)</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <LabAntAlert />
          <LabAntButtons />
          <LabAntCard />
          <LabAntForm />
          <LabAntTable />
        </div>
      </section>
    </main>
  )
}