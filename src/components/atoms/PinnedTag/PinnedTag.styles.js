import styled from 'styled-components'

export const StyledPinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`

export const StyledPinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`
