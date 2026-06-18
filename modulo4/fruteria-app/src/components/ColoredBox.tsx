// src/components/ColoredBox.tsx

interface ColoredBoxProps {
  color: string
  width?: number
  height?: number
  label?: string
}

export default function ColoredBox({
  color,
  width = 80,
  height = 80,
  label,
  borderRadius = 8
}: ColoredBoxProps) {
  return (
    <div style={{ display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6 }}>
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius: borderRadius,
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666' }}>{label}</span>}
    </div>
  )
}