import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledCallout,
  StyledCalloutBody,
  StyledCalloutActions,
  StyledCalloutMedia
} from './Callout.styles'

//#region CalloutBody
export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{children}</StyledCalloutBody>
)

CalloutBody.defaultProps = {
  children: undefined
}

CalloutBody.propTypes = {
  children: PropTypes.node
}
//#endregion

//#region CalloutActions
export const CalloutActions = ({ children }) => (
  <StyledCalloutActions>{children}</StyledCalloutActions>
)

CalloutActions.defaultProps = {
  children: undefined
}

CalloutActions.propTypes = {
  children: PropTypes.node
}
//#endregion

//#region CalloutMedia
export const CalloutMedia = ({ children }) => (
  <StyledCalloutMedia>{children}</StyledCalloutMedia>
)

CalloutMedia.defaultProps = {
  children: undefined
}

CalloutMedia.propTypes = {
  children: PropTypes.node
}
//#endregion

//#region Callout
export const Callout = ({ children }) => (
  <StyledCallout>{children}</StyledCallout>
)

Callout.defaultProps = {
  children: undefined
}

Callout.propTypes = {
  children: PropTypes.node
}
//#endregion
