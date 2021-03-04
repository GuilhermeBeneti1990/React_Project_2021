import React from 'react'
import PropTypes from 'prop-types'

import { Root, Body, Media } from './Card.styles'

//#region CardBody
export const CardBody = ({ children }) => <Body>{children}</Body>

CardBody.defaultProps = {
  children: undefined
}

CardBody.propTypes = {
  children: PropTypes.node
}
//#endregion

//#region CardMedia
export const CardMedia = ({ image }) => <Media image={image} />

CardMedia.defaultProps = {
  image: undefined
}

CardMedia.propTypes = {
  image: PropTypes.string
}
//#endregion

//#region Card
const Card = ({ children }) => <Root>{children}</Root>

Card.defaultProps = {
  children: undefined
}

Card.propTypes = {
  children: PropTypes.node
}
//#endregion

export default Card
