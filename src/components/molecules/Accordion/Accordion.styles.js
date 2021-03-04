import styled, { css } from 'styled-components'

export const Root = styled.div`
  border: 1px solid #e0e0e0;
  border-left: 5px solid ${(props) => props.theme.colors.primary.main};
  background-color: #fff;

  ${(props) =>
    props.open &&
    css`
      margin: 16px 0;
    `}

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;

  & h6 {
    margin: 0;
    flex: 1;
  }

  & svg {
    font-size: 1.25rem;
  }
`

export const Body = styled.div`
  padding: 0 16px 16px 16px;
`
