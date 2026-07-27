// src/components/StyledComponentsDemo.tsx

import styled from 'styled-components'

// Props transient con prefijo $ — no pasan al DOM en v6
interface BtnProps {
  $variant?: 'primary' | 'outline'
}

const Card = styled.div`
  border:        1px solid var(--border);
  background:    var(--card);
  border-radius: 10px;
  padding:       16px;
`
//
const MainTitle = styled.h1`
  font-size:   24px;
  color:       #1e3a8a; /* Color azul oscuro */
  font-family: 'Arial', sans-serif;
  margin:      0 0 16px 0;
  text-align:  center;
`

const Title = styled.h3`
  margin:      0 0 8px 0;
  font-weight: 800;
  color:       #e11d48; 
  font-family: 'Georgia', serif; 
`
//
const CustomText = styled.p`
  margin:      0 0 12px;
  color:       #059669; /* Verde esmeralda */
  font-family: 'sans-serif';
  font-size:   14px;
  line-height: 1.5;
`

const Btn = styled.button<BtnProps>`
  padding:       8px 16px;
  border-radius: 8px;
  cursor:        pointer;
  font-weight:   600;
  font-style:    italic; 
  border:        1px solid var(--accent);
  background:    ${p => p.$variant === 'outline' ? 'transparent' : 'var(--accent)'};
  color:         ${p => p.$variant === 'outline' ? 'var(--accent)' : 'white'};
  transition:    filter 0.15s;

  &:hover {
    filter: brightness(1.1);
  }
`

export default function StyledComponentsDemo() {
  return (
    <Card>
      {}
      <MainTitle>Título Principal H1</MainTitle>

      <Title>Titulo cambiado de color</Title>
      
      {}
      <CustomText>
        Parrafo de texto con estilo personalizado
      </CustomText>

      <div style={{ display: 'flex', gap: 8 }}>
        <Btn>Primary</Btn>
        <Btn $variant="outline">Outline</Btn>
      </div>
    </Card>
  )
}