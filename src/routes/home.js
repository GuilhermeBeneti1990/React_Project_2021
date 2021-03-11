import React from 'react'

import HomePage from 'components/pages/Home/Home'

import { useScrollToTop } from 'hooks/scroll'

import { useProducts } from 'hooks/products'

const Home = () => {
  useScrollToTop()

  const products = useProducts()

  return <HomePage products={products} />
}

export default Home
