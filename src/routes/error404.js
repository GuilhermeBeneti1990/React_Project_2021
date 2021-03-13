import React from 'react'

import Error from 'components/pages/Error/Error'
import ErrorImage from 'draws/Error'

const error404 = () => (
  <Error
    image={<ErrorImage />}
    title="Página não encontrada"
    description="Ops, não encontramos a página que procura"
  />
)

export default error404
