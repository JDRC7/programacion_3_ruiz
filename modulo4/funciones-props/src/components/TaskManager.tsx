import { useState } from 'react'

// 1. Añadimos el campo 'title' a la estructura de la tarea
interface Task {
  id: number
  title: string // Nuevo campo
  text: string
  done: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')
  // 2. Estado para el input del título de la tarea
  const [titleInput, setTitleInput] = useState('')

  // AGREGAR — Ahora incluye tanto el título como la descripción
  function addTask() {
    // Validamos que al menos tenga un título o texto antes de agregar
    if (!titleInput.trim() || !input.trim()) return
    
    setTasks((prev) => [
      ...prev,
      { 
        id: Date.now(), 
        title: titleInput.trim(), // Guardamos el título
        text: input.trim(), 
        done: false 
      },
    ])
    
    // Limpiamos ambos inputs
    setInput('')
    setTitleInput('')
  }

  // ELIMINAR — Corrige el comportamiento usando filter de forma segura
  function removeTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  // ACTUALIZAR — map cambia el estado !task.done
  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  return (
    <div style={{ maxWidth: 400, margin: '20px auto', fontFamily: 'sans-serif' }}>
      {/* Formulario con dos inputs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        
        {/* 3. Input para el Título de la tarea */}
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          placeholder="Título de la tarea..."
          style={inputStyle}
        />

        <div style={{ display: 'flex', gap: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Descripción o detalles..."
            style={{ ...inputStyle, flex: 1 }}
          />
          <button
            onClick={addTask}
            style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
          >
            Agregar
          </button>
        </div>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#999', fontSize: 14, textAlign: 'center' }}>No hay tareas. ¡Agrega una!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              style={{ cursor: 'pointer' }}
            />
            
            {/* Contenedor del texto para organizar Título y Descripción */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
              
              {/* 4. Visualización del Título */}
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#aaa' : '#111',
                }}
              >
                {task.title}
              </span>

              {/* Visualización de la Descripción */}
              <span
                style={{
                  fontSize: 13,
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.done ? '#ccc' : '#666',
                }}
              >
                {task.text}
              </span>
            </div>

            <button
              onClick={() => removeTask(task.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16, padding: '4px 8px' }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {tasks.filter((t) => t.done).length} de {tasks.length} completadas
        </p>
      )}
    </div>
  )
}

// Estilo común reutilizable para los inputs
const inputStyle = {
  padding: '8px 12px', 
  borderRadius: 6, 
  border: '1px solid #ddd',
  fontSize: 14,
  outline: 'none'
}