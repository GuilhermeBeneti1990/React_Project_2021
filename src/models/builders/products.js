import Food01 from 'assets/food_01.jpg'
import products from './fixtures/products.json'

export const buildProducts = (size) => {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: Food01
    })
  }

  return result
}

export const buildProduct = () => buildProducts(1)[0]
