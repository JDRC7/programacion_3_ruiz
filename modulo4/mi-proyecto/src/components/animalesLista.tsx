// 1. Definición del objeto Animal con sus tipos de datos
interface Animal {
  id: number
  name: string
  price: number
  edad: number  // Tipo: number (numérico)
  tipo: string  // Tipo: string (texto, ej: 'Perro', 'Gato')
}

// 2. Definición de las Props que recibe el componente
interface AnimalesListaProps {
  animales: Animal[] // Array/Lista de objetos tipo Animal
  title?: string     // String opcional
}

export default function AnimalesLista({
  animales,
  title = 'Catálogo de Mascotas', // Valor por defecto
}: AnimalesListaProps) {
  return (
    <section style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {/* Flujo: Mensaje si el array de animales está vacío */}
      {animales.length === 0 && (
        <p style={{ color: '#999' }}>No hay animales disponibles en este momento.</p>
      )}

      {/* Flujo: Mapeo de la lista de animales */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {animales.map((animal) => (
          <li
            key={animal.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>
              {/* Nombre en negrita */}
              <strong style={{ marginRight: 8 }}>{animal.name}</strong>
              
              {/* Tipo y Edad mostrados juntos de manera limpia */}
              <span style={{ color: '#666', fontSize: 14 }}>
                [{animal.tipo} • {animal.edad} {animal.edad === 1 ? 'año' : 'años'}]
              </span>
            </span>

            {/* Precio formateado a dos decimales */}
            <strong>${animal.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}