import styled from 'styled-components'

export const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`

export const IconContainer = styled.span`
  margin-right: 8px;
`

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`
