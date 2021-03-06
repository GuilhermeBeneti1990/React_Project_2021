import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Grid from 'components/atoms/Grid'
import Card, { CardMedia, CardBody } from 'components/molecules/Card'
import Heading from 'components/atoms/Heading'
import Button from 'components/atoms/Button'
import { MoreBtn } from './ProductGrid.styles'

import ProductType from 'models/types/ProductType'

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false)
  const filteredProducts = showAll ? products : products.slice(0, 3)

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.description}</p>
              <div>
                <Button
                  as={Link}
                  to={`/product/${product.slang}`}
                  color="primary"
                  variant="link"
                >
                  Saiba mais...
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {!showAll && (
        <MoreBtn>
          <Button variant="outlined" onClick={() => setShowAll(true)}>
            Complete List
          </Button>
        </MoreBtn>
      )}
    </>
  )
}

ProductGrid.defaultProps = {
  products: []
}

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductType)
}

export default ProductGrid
