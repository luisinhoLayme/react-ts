import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import { useShoppingCard } from '../hooks/useShoppingCard'
import '../styles/custom-styles.css'

const ShoppingPage = () => {

  const { onProductCountChange, shoppingCard } = useShoppingCard()

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={ shoppingCard[product.id]?.count || 0 }
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {Object.entries(shoppingCard).map(([key, product]) => (
          <ProductCard
            key={ key }
            product={product}
            className="bg-dark text-white"
            style={{ width: '100px' }}
            onChange={ onProductCountChange }
            value={ product.count }
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            />
          </ProductCard>
        ))}
      </div>

    </div>
  )
}

export default ShoppingPage
