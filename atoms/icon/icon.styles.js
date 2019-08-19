import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color};
  fill: ${({ color }) => color};
  height: ${({ iconsize }) => iconsize}px;
  width: ${({ iconsize }) => iconsize}px;
`
