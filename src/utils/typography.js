import Typography from "typography"
import sternGroveTheme from "typography-theme-stern-grove"
sternGroveTheme.scaleRatio = 4

const typography = new Typography(sternGroveTheme)

export default typography
export const rhythm = typography.rhythm