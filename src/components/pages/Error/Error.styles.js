import styled from 'styled-components'

export const ErrorContent = styled.div`
  h1 {
    margin-top: 0;
  }
`

export const ErrorMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`

export const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    max-width: 300px;
    height: auto;
    color: ${(props) => props.theme.colors.primary.main};
  }
`
