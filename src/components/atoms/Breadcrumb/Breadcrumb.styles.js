import styled, { css } from 'styled-components'

export const Root = styled.div`
  padding: 16px 0;
`

export const Item = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  color: #fff;

  ${(props) =>
    props.to &&
    css`
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.primary.main};
      }
    `}

  &:not(:first-child) {
    &::before {
      content: '>';
      color: ${(props) => props.theme.colors.primary.main};
      padding: 0 10px;
    }
  }
`
