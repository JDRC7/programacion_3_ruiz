// src/components/ProductCard.tsx

interface ProductCardProps {
  name: string
  price: number
  description?: string
  highlighted?: boolean
}

export default function ProductCard({ name, price, description, highlighted }: ProductCardProps) {
  return (
    <div style={{
      padding: 16,
      borderRadius: 8,
      border: `2px solid ${highlighted ? '#0070f3' : '#e5e7eb'}`,
      backgroundColor: highlighted ? '#eff6ff' : '#ffffff',
      maxWidth: 300
    }}>
      <h4 style={{ margin: '0 0 8px', color: '#111827' }}>{name}</h4>
      <p style={{ fontSize: 18, fontWeight: 'bold', margin: '0 0 8px', color: '#059669' }}>
        ${price.toFixed(2)}
      </p>
      {description && <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>{description}</p>}
    </div>
  )
}