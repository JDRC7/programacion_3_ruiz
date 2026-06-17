// src/components/WelcomeBanner.tsx

// 1. Corregido: Definición correcta de la interface usando llaves
interface WelcomeProps {
  subtitle?: string // Tipo: string opcional
}

export default function WelcomeBanner({ subtitle }: WelcomeProps) {
  return (
    <div style={{ background: '#00f329', color: '#fff', padding: '16px 24px', opacity: 0.5, borderRadius: 8 }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al curso de React</h1>
      
      {/* Flujo: Si te pasan un subtítulo por props lo muestra, si no, usa el texto por defecto */}
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>
        {subtitle ? subtitle : "Aprende React 19 con TypeScript"}
      </p>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>
        {subtitle ? subtitle : "Programacion III"}
      </p>
    </div>
  )
}