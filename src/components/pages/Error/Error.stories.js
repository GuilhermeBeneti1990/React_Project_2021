import React from 'react'

import Error from './Error'
import ErrorImageNotFound from 'draws/Error'
import ErrorImageServiceNotFound from 'draws/ServerDown'

export default {
  title: 'Components/Pages/Error',
  component: Error
}

export const pageNotFound = () => (
  <Error
    image={<ErrorImageNotFound />}
    title="Página náo encontrada"
    description="Ops, não encontramos a página que procura"
  />
)

export const serviceNotFound = () => (
  <Error
    image={<ErrorImageServiceNotFound />}
    title="Serviço não encontrada"
    description="Ops, esse serviço não se encontra disponível"
  />
)
