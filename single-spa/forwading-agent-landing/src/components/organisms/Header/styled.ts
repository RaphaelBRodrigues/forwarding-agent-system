import styled from 'styled-components'
import theme from 'styles/theme'

export const Header = styled.header`
  display: flex;
  background-color: ${({theme}) => theme.colors.black};
  color: white;
  justify-content: space-between;
  padding: 5px 40px;
`