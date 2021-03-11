import styled from 'styled-components'

export const buttonColors = {
  default: 'default',
  primary: 'primary',
  danger: 'danger'
}

export const buttonsVariants = {
  default: 'default',
  outlined: 'outlined',
  link: 'link'
}

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case buttonColors.primary:
      return theme.colors.primary.main
    case buttonColors.danger:
      return theme.colors.danger.main
    default:
      return '#e0e0e0'
  }
}

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case buttonColors.primary:
      return theme.colors.primary.dark
    case buttonColors.danget:
      return theme.colors.danger.dark
    default:
      return '#5a6268'
  }
}

const getColorText = ({ theme, color }) => {
  switch (color) {
    case buttonColors.primary:
      return theme.colors.primary.text
    case buttonColors.danget:
      return theme.colors.danger.text
    default:
      return '#212121'
  }
}

const getOutlinedText = (props) => {
  if (props.color === buttonColors.default) {
    return '#212121'
  }
  return getMainColor(props)
}

const getLinkText = (props) => {
  if (props.color === buttonColors.default) {
    return '#757575'
  }
  return getMainColor(props)
}

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};
  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`

export const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:not(:disabled) {
    background-color: transparent;
    color: ${getDarkColor};
  }
`

export const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:not(:disabled) {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`
