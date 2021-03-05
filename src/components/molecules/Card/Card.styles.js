import styled from 'styled-components'

export const Root = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
`

export const Body = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`

export const Media = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`
