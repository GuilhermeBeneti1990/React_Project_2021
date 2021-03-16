import React from 'react'
import { Callout, CalloutBody, CalloutMedia, CalloutActions } from '.'

import Button from 'components/atoms/Button'

import RegisterImg from 'draws/Register'

export default {
  title: 'Components/Organisms/Callout',
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia }
}

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Título Callout</h6>
      <p>Descrição do Callout</p>
      <CalloutActions>
        <Button color="primary">Inscrever-se</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <RegisterImg />
    </CalloutMedia>
  </Callout>
)
