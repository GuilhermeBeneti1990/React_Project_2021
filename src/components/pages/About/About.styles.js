import styled from 'styled-components'

export const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`
