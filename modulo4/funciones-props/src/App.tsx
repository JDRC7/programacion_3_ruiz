// src/App.tsx

import { useState } from 'react'
import DigitalCounter      from './components/DigitalCounter'
import SafeCounter         from './components/SafeCounter'
import UserProfileForm     from './components/UserProfileForm'
import TaskManager         from './components/TaskManager'
import ShoppingCartSummary from './components/ShoppingCartSummary'
import CatalogProductItem  from './components/CatalogProductItem'

interface CartItem { id: number; name: string; price: number }

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
]

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }

  return (
    <main style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Ejercicios de useState</h1>

      {/* --- PASO 1 --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>1. DigitalCounter</h3>
        <DigitalCounter label="Contador" step={1} />
      </section>

      <hr style={separatorStyle} />

      {/* --- PASO 2 --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>2. SafeCounter</h3>
        <SafeCounter />
      </section>

      <hr style={separatorStyle} />

      {/* --- PASO 3 --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>3. UserProfileForm</h3>
        <UserProfileForm />
      </section>

      <hr style={separatorStyle} />

      {/* --- PASO 4 --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>4. TaskManager</h3>
        <TaskManager />
      </section>

      <hr style={separatorStyle} />

      {/* --- PASO 5 --- */}
      <section style={{ marginBottom: 28 }}>
        <h3>5. Carrito de Compras</h3>
        
        <h4 style={{ margin: '12px 0 8px' }}>Catálogo</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {catalog.map((p) => (
            <CatalogProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <ShoppingCartSummary 
          items={cartItems} 
          onClearCart={handleClearCart} 
        />
      </section>
    </main>
  )
}

const separatorStyle = {
  margin: '30px 0',
  border: 'none',
  borderTop: '1px dashed #ccc',
}