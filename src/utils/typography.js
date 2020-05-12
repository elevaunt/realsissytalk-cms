import Typography from "typography"
import stowLake from "typography-theme-stow-lake"
stowLake.baseFontSize = "18px"
stowLake.scaleRatio = 4
stowLake.googleFonts = [
  {
    name: 'Montserrat',
    styles: [
      '400',
    ],
  },
  {
    name: 'Merriweather',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
]
stowLake.headerFontFamily = ['Montserrat', 'sans-sarif']

const typography = new Typography(stowLake)

export default typography
export const rhythm = typography.rhythm