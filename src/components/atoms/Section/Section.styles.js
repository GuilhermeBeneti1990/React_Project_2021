import styled, { css } from 'styled-components'

export const Content = styled.div`
  padding: 40px 0;
  ${(props) =>
    props.inverse &&
    css`
      background-color: #f7f7f7;
    `}

  h2 {
    margin-top: 0;
  }
`
