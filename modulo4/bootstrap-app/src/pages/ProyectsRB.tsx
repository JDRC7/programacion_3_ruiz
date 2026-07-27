// src/pages/AboutRB.tsx

import { Container, Card, ListGroup } from 'react-bootstrap'

export default function AboutRB() {
  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <h1 className="h3 fw-bold mb-4">Mis Proyectos</h1>
      <Card className="shadow-sm">
        <Card.Header className="fw-semibold">Proyectos Stack utilizado</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Despliege AWS, GoogleCloud, Azure</ListGroup.Item>
          <ListGroup.Item>React-Bootstrap v2 + Bootstrap 5</ListGroup.Item>
          <ListGroup.Item>React Router v7</ListGroup.Item>
          <ListGroup.Item>Control de eventos realizados</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}