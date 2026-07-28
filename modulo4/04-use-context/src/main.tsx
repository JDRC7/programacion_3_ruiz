import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 1. Importa los proveedores de tus contextos
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext' // (Asegúrate de que la ruta exista)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Envuelve <App /> con los Providers */}
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)