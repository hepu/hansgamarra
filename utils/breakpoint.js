import VIEWPORTS from '../styles/viewports'

export const mobile = `@media only screen and (max-device-width : ${VIEWPORTS.tablet.styles.width})`
export const tablet = `@media only screen and (min-device-width : ${VIEWPORTS.tablet.styles.width})`
export const desktop = `@media only screen and (min-device-width : ${VIEWPORTS.desktopSmall.styles.width}) and (orientation : landscape)`

export default {
  desktop,
  tablet
}
