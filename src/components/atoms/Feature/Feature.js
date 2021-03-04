import React from 'react'
import PropTypes from 'prop-types'
import { Root, IconRoot, IconContainer } from './Feature.styles'

const Feature = ({ icon, title, children }) => (
  <Root>
    <IconRoot>
      <IconContainer>{icon}</IconContainer>
    </IconRoot>
    <h5>{title}</h5>
    <div>{children}</div>
  </Root>
)

Feature.defaultProps = {
  icon: undefined,
  title: '',
  children: undefined
}

Feature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Feature
