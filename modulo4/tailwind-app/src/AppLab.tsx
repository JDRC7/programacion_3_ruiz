// src/AppLab.tsx

import LabTwButtons from './lab/LabTwButtons'
import LabTwAlert from './lab/LabTwAlert'
import LabTwCard from './lab/LabTwCard'
import LabTwForm from './lab/LabTwForm'
import LabTwTable from './lab/LabTwTable'
import FormularioUsuario from './components/shadcn/FormularioUsuario'
import TarjetaProducto from './components/shadcn/TarjetaProducto'

export default function AppLab() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 font-sans">
      <header className="max-w-5xl mx-auto mb-10 pb-4 border-b border-white/10 text-center">
        <h1 className="text-3xl font-extrabold text-white">Tailwind v4 & Shadcn LAB</h1>
        <p className="text-slate-400 text-sm mt-1">
          Vista unificada de todos los componentes y laboratorios
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        {/* --- 1. SHADCN COMPONENTS --- */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-sky-400 border-b border-sky-500/20 pb-2">
            1. Componentes Shadcn
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-3">Formulario de Usuario</h3>
              <FormularioUsuario />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-3">Tarjeta de Producto</h3>
              <TarjetaProducto />
            </div>
          </div>
        </section>

        <hr className="border-white/10" />

        {/* --- 2. TAILWIND BUTTONS --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-sky-400 border-b border-sky-500/20 pb-2">
            2. Botones (Tailwind)
          </h2>
          <LabTwButtons />
        </section>

        <hr className="border-white/10" />

        {/* --- 3. TAILWIND ALERTS --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-sky-400 border-b border-sky-500/20 pb-2">
            3. Alertas (Tailwind)
          </h2>
          <LabTwAlert />
        </section>

        <hr className="border-white/10" />

        {/* --- 4. TAILWIND CARDS --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-sky-400 border-b border-sky-500/20 pb-2">
            4. Tarjetas (Tailwind)
          </h2>
          <LabTwCard />
        </section>

        <hr className="border-white/10" />

        {/* --- 5. TAILWIND FORM --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-sky-400 border-b border-sky-500/20 pb-2">
            5. Formulario (Tailwind)
          </h2>
          <LabTwForm />
        </section>

        <hr className="border-white/10" />

        {/* --- 6. TAILWIND TABLE --- */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-sky-400 border-b border-sky-500/20 pb-2">
            6. Tabla (Tailwind)
          </h2>
          <LabTwTable />
        </section>
      </main>
    </div>
  )
}