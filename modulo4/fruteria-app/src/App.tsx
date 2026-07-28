// src/App.tsx

import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'

// Descomenta conforme vayas creando los archivos:
// import ProductCard        from './components/ProductCard'
// import ProductCatalogList from './components/ProductCatalogList'
// import UserProfileCard    from './components/UserProfileCard'
// import DigitalCounter     from './components/DigitalCounter'
// import UserProfileForm    from './components/UserProfileForm'

const fruits = [
  { name: 'Manzana',       emoji: '🍎', calories: 52, inSeason: true },
  { name: 'Banana',        emoji: '🍌', calories: 89, inSeason: true },
  { name: 'Naranja',       emoji: '🍊', calories: 47, inSeason: true },
  { name: 'Uva',           emoji: '🥭', calories: 60, inSeason: true },
]

export default function App() {
  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Frutería App - Ejercicios</h1>

      <section style={{ marginBottom: 28 }}>
        <h3>1. WelcomeBanner</h3>
        <WelcomeBanner subtitle="Programadores Estrellas" />
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>2. UserGreeting</h3>
        <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" />
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>3. CurrentDateDisplay</h3>
        <CurrentDateDisplay />
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>4. ColoredBox</h3>
        <div style={{ display: 'flex', gap: 12 }}>
          <ColoredBox color="#0070f3" label="Primary" />
          <ColoredBox color="#22c55e" label="Success" />
          <ColoredBox color="#e00"     label="Danger" />
        </div>
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>5. ConditionalGreeting</h3>
        <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" />
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>6. FruitList</h3>
        <FruitList fruits={fruits} title="Frutas favoritas" />
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>7. PriceTag</h3>
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
          <PriceTag amount={99.99} currency="USD" />
          <PriceTag amount={99.99} currency="USD" discountPercent={20} />
        </div>
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>8. StatusBadge</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <StatusBadge status="active" />
          <StatusBadge status="pending" />
          <StatusBadge status="error" />
        </div>
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>9. MiniProfileCard</h3>
        <MiniProfileCard
          fullName="Ana García"
          role="Senior Developer"
          department="Ingeniería"
          status="active"
          joinedYear={2019}
        />
      </section>

      <hr style={separatorStyle} />

      <section style={{ marginBottom: 28 }}>
        <h3>10. SimpleInfoTable</h3>
        <SimpleInfoTable
          title="Resumen del pedido"
          rows={[
            { label: 'Subtotal', value: '$89.99' },
            { label: 'Envío',    value: '$5.00' },
            { label: 'Total',    value: '$94.99', highlight: true },
          ]}
        />
      </section>
    </main>
  )
}

const separatorStyle = {
  margin: '30px 0',
  border: 'none',
  borderTop: '1px dashed #ccc',
}