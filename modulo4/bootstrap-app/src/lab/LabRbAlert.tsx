// src/lab/LabRbAlert.tsx

import { useState } from 'react'
import { Container, Alert, Button } from 'react-bootstrap'

export default function LabRbAlert() {
  // Estados independientes para cada alerta
  const [showSuccess, setShowSuccess] = useState(true)
  const [showError, setShowError] = useState(true)

  return (
    <Container className="py-4">
      <h2 className="h4 fw-bold mb-1">LAB: Alert</h2>
      <p className="text-secondary mb-3">Con dismissible y control de visibilidad.</p>

      {/* Alerta de Éxito */}
      {showSuccess ? (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading>Operación exitosa</Alert.Heading>
          <p className="mb-0">El formulario se envió correctamente (demo).</p>
        </Alert>
      ) : (
        <Button variant="success" className="mb-4" onClick={() => setShowSuccess(true)}>
          Mostrar alerta de éxito
        </Button>
      )}

      <div className="my-3"></div> {/* Espaciador básico */}

      {/* Alerta de Error (danger) */}
      {showError ? (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Error en cálculos</Alert.Heading>
          <p className="mb-0">División por cero no permitida (demo).</p>
        </Alert>
      ) : (
        <Button variant="danger" onClick={() => setShowError(true)}>
          Mostrar alerta de error
        </Button>
      )}
    </Container>
  )
}