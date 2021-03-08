import React from 'react'
import PropTypes from 'prop-types'

import { Root, Body, Media, MediaDescription } from './Card.styles'

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
export const CardMedia = ({ image, children }) => (
  <Media image={image}>{children}</Media>
)

CardMedia.defaultProps = {
  image: undefined,
  children: undefined
}

CardMedia.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node
}
//#endregion

//#region CardMediaDescription
export const CardMediaDescription = ({ children }) => (
  <MediaDescription>{children}</MediaDescription>
)

CardMediaDescription.defaultProps = {
  children: undefined
}

CardMediaDescription.propTypes = {
  children: PropTypes.node
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
