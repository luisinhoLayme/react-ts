import { useState } from 'react'
import { Product, ProductInCard } from '../interfaces/interfaces'

export const useShoppingCard = () => {
  
  const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({})

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    // console.log('onProductCountChange', count, product)
    setShoppingCard(oldShoppingCard => {

      const productInCard: ProductInCard = oldShoppingCard[product.id] || { ...product, count: 0 }

      if( Math.max( productInCard.count + count, 0 ) > 0 ) {
        productInCard.count += count
        return {
          ...oldShoppingCard,
          [product.id]: productInCard
        }
      }

      // Borrar el producto.

      const { [product.id]: toDelete, ...rest } = oldShoppingCard
      return rest

      // eliminamos el product, con el count en 0
      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCard
      //   return rest
      // }
      //
      // return {
      //   ...oldShoppingCard,
      //   [product.id]: { ...product, count }
      // }
    })
  }
  return {
    shoppingCard,
    onProductCountChange,
  }
}
