// src/App.tsx

import AnimalesLista from './components/animalesLista'
import ProductCard from './components/ProductCard'
import ProductCatalogList from './components/ProductCatalogList'

// --- DATOS DE PRUEBA ---
const listaDeMascotas = [
  { id: 1, name: 'Firulais', tipo: 'Perro', edad: 3, price: 45.00 },
  { id: 2, name: 'Michi', tipo: 'Gato', edad: 1, price: 30.50 },
  { id: 3, name: 'Paco', tipo: 'Ave', edad: 2, price: 15.00 }
]

interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean
  category: string
}

const catalog: Product[] = [
  { id: 1, name: 'Teclado mecánico', price: 89.99, category: 'Computación' },
  { id: 2, name: 'Monitor 27"', price: 349.99, category: 'Computación' },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true, category: 'Computación' },
  { id: 4, name: 'Webcam HD', price: 59.99, category: 'Computación' },
  { id: 5, name: 'Hub USB-C', price: 39.99, category: 'Computación' },
]

// --- COMPONENTES AUXILIARES ---
function PrimerComponente() {
  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h4>Primer Componente</h4>
      <p>Hola desde React 19 + TypeScript (Vite 8).</p>
    </div>
  )
}

function SegundoComponente() {
  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h4>Segundo Componente</h4>
      <p>Este es el segundo componente.</p>
    </div>
  )
}

function HelloReactSection() {
  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h3 style={{ color: '#1a6b4a', margin: '0 0 8px' }}>
        Hola desde React 19 + TypeScript
      </h3>
      <p style={{ margin: '0 0 4px' }}>Proyecto configurado con Vite 8.</p>
      <small style={{ color: '#6b7280' }}>Versión: 1.0.0</small>
    </div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function App() {
  return (
    <main style={{ maxWidth: 580, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Demostración General</h1>

      {/* --- SECCIÓN 1: BIENVENIDA / HELLO REACT --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>1. Bienvenida y Versión</h3>
        <HelloReactSection />
      </section>

      <hr style={separatorStyle} />

      {/* --- SECCIÓN 2: PRIMER Y SEGUNDO COMPONENTE --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>2. Componentes Básicos</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <PrimerComponente />
          <SegundoComponente />
        </div>
      </section>

      <hr style={separatorStyle} />

      {/* --- SECCIÓN 3: LISTA DE ANIMALES --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>3. Lista de Animales (Con datos / Vacía)</h3>
        
        <AnimalesLista 
          animales={listaDeMascotas} 
          title="Mascotas Disponibles 🐾" 
        />

        <div style={{ marginTop: 20 }}>
          <AnimalesLista 
            animales={[]} 
            title="Adopciones Urgentes (Lista Vacía)" 
          />
        </div>
      </section>

      <hr style={separatorStyle} />

      {/* --- SECCIÓN 4: CATÁLOGO DE PRODUCTOS Y CARDS --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>4. Tarjetas y Catálogo de Productos</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
          <ProductCard
            title="Bienvenido a la tienda"
            description="Encuentra los mejores accesorios para tu escritorio"
            highlighted
            price={1000}
          />

          <ProductCard 
            title="Oferta del día" 
            description="Webcam HD con 20% de descuento" 
          />
        </div>

        <ProductCatalogList products={catalog} title="Productos disponibles" />
      </section>
    </main>
  )
}

const separatorStyle = {
  margin: '30px 0',
  border: 'none',
  borderTop: '1px dashed #ccc',
}