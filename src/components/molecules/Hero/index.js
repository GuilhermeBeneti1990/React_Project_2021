import React from 'react'
import PropTypes from 'prop-types'
import { Content, Root } from './Hero.styles'
import Container from 'components/atoms/Container'

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
)

export default Hero

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
}
