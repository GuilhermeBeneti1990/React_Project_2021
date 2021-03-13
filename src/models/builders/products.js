import Item01 from 'assets/Item_01.jpg'
import products from './fixtures/products.json'

export const buildProducts = (size) => {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: Item01
    })
  }

  return result
}

export const buildProduct = () => buildProducts(1)[0]
