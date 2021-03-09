import React from 'react'
import PropTypes from 'prop-types'
import { StyledPinnedList, StyledPinnedItem } from './PinnedTag.styles'

//#region PinnedItem
export const PinnedItem = ({ children }) => (
  <StyledPinnedItem>{children}</StyledPinnedItem>
)

PinnedItem.defaultProps = {
  children: undefined
}

PinnedItem.propTypes = {
  children: PropTypes.node
}
//#endregion

//#region PinnedList
export const PinnedList = ({ children }) => (
  <StyledPinnedList>{children}</StyledPinnedList>
)

PinnedList.defaultProps = {
  children: undefined
}

PinnedList.propTypes = {
  children: PropTypes.node
}
//#endregion
