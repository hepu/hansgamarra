import styled from 'styled-components'

// Components
import Icon from '../../atoms/icon'

// Styles
import { StyledFontAwesomeIcon } from '../../atoms/icon/icon.styles'

export const NavbarContainer = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.61);
  color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 54px;
  left: 0;
  justify-content: space-between;
  padding: 10px 15px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
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
    color: #4d20e4;
    fill: #4d20e4;
    transition: all 0.16s ease;
  }
`
