import React from 'react'
import Button from '.'
import styled from 'styled-components'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Components/Atoms/Button',
  component: Button
}

const events = actions({ onClick: 'clicked' })

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`

const ButtonWrapper = (props) => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...props} {...events}>
        Default
      </Button>
      <Button {...props} color="primary" {...events}>
        Primary
      </Button>
      <Button {...props} color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>As a Link</p>
    <Toolbar>
      <Button as="a" href="#" {...props} {...events}>
        Default
      </Button>
      <Button as="a" href="#" {...props} color="primary" {...events}>
        Primary
      </Button>
      <Button as="a" href="#" {...props} color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button {...props} disabled {...events}>
        Default
      </Button>
      <Button {...props} disabled color="primary" {...events}>
        Primary
      </Button>
      <Button {...props} disabled color="danger" {...events}>
        Danger
      </Button>
    </Toolbar>
  </div>
)

export const usage = () => <ButtonWrapper />

export const outlined = () => <ButtonWrapper variant="outlined" />

export const link = () => <ButtonWrapper variant="link" />
