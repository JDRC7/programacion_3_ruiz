// src/components/ProductCatalogList.tsx

interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean
}

interface ProductCatalogListProps {
  products: Product[]
  title: string
}

export default function ProductCatalogList({ products, title }: ProductCatalogListProps) {
  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8, maxWidth: 380 }}>
      <h4 style={{ margin: '0 0 12px' }}>{title}</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {products.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', opacity: item.outOfStock ? 0.5 : 1 }}>
            <span>{item.name} {item.outOfStock && '(Agotado)'}</span>
            <strong>${item.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}