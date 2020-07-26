import styled from 'styled-components'

export const BackgroundChangerContainer = styled.div`
  height: 100vh;
  position: relative;
`

export const Image = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${({ url }) => url});
  display: ${({ hide }) => (hide ? 'none' : 'initial')};
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  transition: all 1.618s ease;
  width: 100%;
`
