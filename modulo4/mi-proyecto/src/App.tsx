// src/App.tsx

import AnimalesLista from './components/animalesLista'

export default function App() {
  // Creamos el Array de Objetos con los animales que queremos mostrar
  const listaDeMascotas = [
    {
      id: 1,
      name: 'Firulais',
      tipo: 'Perro',
      edad: 3,         // Tipo: number
      price: 45.00     // Tipo: number
    },
    {
      id: 2,
      name: 'Michi',
      tipo: 'Gato',
      edad: 1,         // Tipo: number
      price: 30.50     // Tipo: number
    },
    {
      id: 3,
      name: 'Paco',
      tipo: 'Ave',
      edad: 2,         // Tipo: number
      price: 15.00     // Tipo: number
    }
  ]

  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      
      {/* Caso 1: Pasando la lista de animales con un título personalizado */}
      <AnimalesLista 
        animales={listaDeMascotas} 
        title="Mascotas Disponibles 🐾" 
      />

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px dashed #ccc' }} />

      {/* Caso 2: Prueba de flujo cuando la lista está vacía (Array vacío) */}
      <AnimalesLista 
        animales={[]} 
        title="Adopciones Urgentes" 
      />

    </main>
  )
}