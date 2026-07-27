import { useState } from 'react'

interface UserProfile {
  name: string
  email: string
  age: number
  city: string 
}

export default function UserProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    age: 0,
    city: '', 
  })

  function handleChange(field: keyof UserProfile, value: string | number) {
    // Validación rápida: si es la edad, no permitir números menores a 0
    if (field === 'age' && Number(value) < 0) return;

    setProfile((prev) => ({
      ...prev,        
      [field]: value, 
    }))
  }

  return (
    <div style={containerStyle}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320, width: '100%' }}>
        <input
          placeholder="Nombre"
          value={profile.name}
          onChange={(e) => handleChange('name', e.target.value)}
          style={inputStyle}
        />
        
        <input
          placeholder="Email"
          type="email"
          value={profile.email}
          onChange={(e) => handleChange('email', e.target.value)}
          style={inputStyle}
        />
        
        <input
          placeholder="Edad"
          type="number"
          min="0" // Evita que usen las flechitas hacia abajo del teclado para ir a negativos
          value={profile.age === 0 ? '' : profile.age}
          onChange={(e) => handleChange('age', Number(e.target.value))}
          style={inputStyle}
        />
        
        <input
          placeholder="Ciudad"
          type="text" 
          value={profile.city} 
          onChange={(e) => handleChange('city', e.target.value)} 
          style={inputStyle}
        />

        {/* CORREGIDO: Se agregaron estilos de texto oscuros para que sea legible */}
        <div style={cardStyle}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: '1.5' }}>
            <strong>{profile.name || '—'}</strong>
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: 13, color: '#555' }}>
            {profile.email || '—'} · {profile.age ? `${profile.age} años` : '—'} · {profile.city || '—'}
          </p>
        </div>
      </form>
    </div>
  )
}

// --- ESTILOS MEJORADOS ---

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '20px',
  backgroundColor: '#1a1a1a', // Fondo oscuro general para que combine con Vite
}

const inputStyle = {
  padding: '10px 14px',
  border: '2px solid #444',
  borderRadius: 8,
  fontSize: 15,
  backgroundColor: '#2a2a2a',
  color: '#fff',
  outline: 'none',
}

const cardStyle = {
  marginTop: 12, 
  padding: 16, 
  backgroundColor: '#ffffff', // Fondo blanco para la tarjeta de previsualización
  borderRadius: 8,
  color: '#1a1a1a', // ¡Fijamos el texto en color oscuro para que no se vuelva invisible!
  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
}