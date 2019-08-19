import React from 'react'
import PropTypes from 'prop-types'
import * as FreeSVGIcons from '@fortawesome/free-solid-svg-icons'
import * as BrandSVGIcons from '@fortawesome/free-brands-svg-icons'

import { StyledFontAwesomeIcon } from './icon.styles'

const Icon = ({ className, href, color, name, size }) => (
  <a className={className} href={href} target="new">
    <StyledFontAwesomeIcon
      icon={FreeSVGIcons[name] || BrandSVGIcons[name]}
      iconsize={size}
      color={color}
    />
  </a>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string
}

Icon.defaultProps = {
  size: 48,
  color: '#dddddd',
  href: null,
  className: null
}

export default Icon
