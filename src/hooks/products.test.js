import { useProduct, useProducts } from './products'

describe('useProduct()', () => {
  test('it should return a product', () => {
    const slang = 'primeiro-produto'
    const product = useProduct({ slang })

    expect(product.title).toEqual('Produto 01')
  })

  test('it should return undefined if product is not found', () => {
    const slang = 'invalid-slange'
    const product = useProduct({ slang })

    expect(product).toBeUndefined()
  })
})

describe('useProducts', () => {
  test('it should return a product list', () => {
    const products = useProducts()

    expect(products.length).toBeGreaterThan(1)
  })
})
