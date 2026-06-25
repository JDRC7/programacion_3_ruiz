// src/components/AutoFocusInput.tsx

import { useEffect, useRef } from 'react'

export default function AutoFocusInput() {
  // Referencia para el primer input (el que recibirá el foco)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Quitamos el comentario para que el foco funcione al cargar la pantalla
    firstInputRef.current?.focus()
  }, [])

  return (
    // 1. Envolvemos todo en un Fragment (<> y </>) para tener un solo elemento padre
    <>
      <input
        ref={firstInputRef} // Este recibe el foco automáticamente
        placeholder="Este input recibe foco automáticamente al montar"
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          width: '100%',
          fontSize: 14,
          marginBottom: '8px' // Un poquito de separación
        }}
      />
      <input
        placeholder="Este es un segundo input de prueba"
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          width: '100%',
          fontSize: 14,
        }}
      />
    </>
  )
}