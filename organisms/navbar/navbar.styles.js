import styled from 'styled-components'

// Components
import Icon from '../../atoms/icon'

// Styles
import { StyledFontAwesomeIcon } from '../../atoms/icon/icon.styles'

export const NavbarContainer = styled.div`
  align-items: center;
  background-color: #333333;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
`

export const MyNameIs = styled.div``

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledIcon = styled(Icon)`
  margin-right: 15px;

  &:hover ${StyledFontAwesomeIcon} {
    color: #ffffff;
    fill: #ffffff;
    transition: all 0.16s ease;
  }
`
