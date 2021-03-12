import React from 'react'
import { useParams } from 'react-router-dom'

import ProductDetailPage from 'components/pages/ProductDetail/ProductDetail'
import Error from 'components/pages/Error/Error'
import ServerError from 'draws/ServerDown'

import { useScrollToTop } from 'hooks/scroll'
import { useProduct } from 'hooks/products'

const ProductDetail = () => {
  useScrollToTop()

  const { slang } = useParams()

  const product = useProduct({ slang })

  if (!product) {
    return (
      <Error
        image={<ServerError />}
        title="Serviço não encontrado"
        description="Ops, esse serviço não se encontra disponível"
      />
    )
  }

  return <ProductDetailPage product={product} />
}

export default ProductDetail
