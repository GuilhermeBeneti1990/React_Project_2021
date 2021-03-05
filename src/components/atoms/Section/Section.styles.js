import styled, { css } from 'styled-components'
import { breakAt, BreakpointSizes } from 'styles/Breakpoints'

export const Content = styled.div`
  padding: 40px 0;
  ${(props) =>
    props.inverse &&
    css`
      background-color: #f7f7f7;
    `}

  ${breakAt(BreakpointSizes.md)} {
    padding: 80px 0;
  }

  h2 {
    margin-top: 0;
  }
`
