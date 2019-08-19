import React from 'react'

// Styles
import {
  NavbarContainer,
  MyNameIs,
  IconsContainer,
  StyledIcon
} from './navbar.styles'

const iconSize = 32

export default () => (
  <NavbarContainer>
    <MyNameIs>Hans Gamarra</MyNameIs>
    <IconsContainer>
      <StyledIcon
        name="faInstagram"
        size={iconSize}
        href="https://www.instagram.com/hansgamarra"
      />
      <StyledIcon
        name="faFacebookF"
        size={iconSize}
        href="https://www.facebook.com/hepu13"
      />
      <StyledIcon
        name="faLinkedinIn"
        size={iconSize}
        href="https://co.linkedin.com/in/hans-gamarra"
      />
      <StyledIcon
        name="faGithub"
        size={iconSize}
        href="https://github.com/hepu"
      />
      <StyledIcon
        name="faYoutube"
        size={iconSize}
        href="https://www.youtube.com/user/Hepu1308"
      />
      <StyledIcon
        name="faEnvelope"
        size={iconSize}
        href="mailto:hans.gamarra1303@gmail.com"
      />
    </IconsContainer>
  </NavbarContainer>
)
