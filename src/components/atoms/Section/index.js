import React from 'react'
import PropTypes from 'prop-types'

import Container from 'components/atoms/Container'
import { Content } from './Section.styles'

const Section = ({ children, inverse }) => (
  <Content inverse={inverse}>
    <Container>{children}</Container>
  </Content>
)

Section.defaultProps = {
  children: undefined,
  inverse: false
}

Section.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool
}

export default Section
