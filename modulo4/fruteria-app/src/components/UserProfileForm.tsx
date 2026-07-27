import { useState } from 'react'

interface UserProfile {
  name: string
  email: string
  age: number
  city: string // 1. Definido correctamente en la interfaz
}

export default function UserProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    age: 0,
    city: '', // CORREGIDO: Usamos un string vacío '' como valor inicial
  })

  function handleChange(field: keyof UserProfile, value: string | number) {
    setProfile((prev) => ({
      ...prev,        
      [field]: value, 
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
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
        value={profile.age === 0 ? '' : profile.age}
        onChange={(e) => handleChange('age', Number(e.target.value))}
        style={inputStyle}
      />
      
      {/* CORREGIDO: Ahora maneja 'city' correctamente */}
      <input
        placeholder="Ciudad"
        type="text" // CORREGIDO: El tipo correcto de HTML es "text"
        value={profile.city} // CORREGIDO: Apunta a profile.city
        onChange={(e) => handleChange('city', e.target.value)} // CORREGIDO: Modifica 'city'
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{profile.name || '—'}</strong> · {profile.email || '—'} · {profile.age || '—'} años · {profile.city || '—'}
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}