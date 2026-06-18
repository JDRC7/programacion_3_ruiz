// src/components/ConditionalGreeting.tsx

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night'

interface ConditionalGreetingProps {
  isLoggedIn: boolean
  userName?: string
  timeOfDay?: TimeOfDay
  greeting?: string
}

export default function ConditionalGreeting({
  isLoggedIn,
  userName = 'visitante',
  timeOfDay = 'morning',
  greeting,
}: ConditionalGreetingProps) {
  const greetings: Record<TimeOfDay, string> = {
    morning: 'Buenos días',
    afternoon: 'Buenas tardes',
    evening: 'Buenas noches',
    night: 'Que tengas una buena noche',
  }

  return (
    <p style={{ color: isLoggedIn ? '#333' : '#e00' }}>
      {isLoggedIn
        ? `${greeting ?? greetings[timeOfDay]}, ${userName}. Bienvenido de vuelta.`
        : 'Por favor inicia sesión para continuar.'}
    </p>
  )
}