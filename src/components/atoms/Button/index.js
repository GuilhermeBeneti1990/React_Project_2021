import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ButtonOutlined,
  ButtonLink,
  buttonColors,
  buttonsVariants
} from './Button.styles'

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case buttonsVariants.outlined:
      return <ButtonOutlined {...props} />
    case buttonsVariants.link:
      return <ButtonLink {...props} />
    default:
      return <Button {...props} />
  }
}

ButtonWrapper.defaultProps = {
  type: 'button',
  children: undefined,
  color: 'default',
  variant: 'default'
}

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(buttonColors)),
  variant: PropTypes.oneOf(Object.values(buttonsVariants))
}

export default ButtonWrapper
