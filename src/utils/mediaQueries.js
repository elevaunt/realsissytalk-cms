import {breakpoints} from './variables'
export const mq = {
  min: {
    /** sm breakpoint: 640px */
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    /** md breakpoint: 768px */
    md: `@media (min-width: ${breakpoints.md}px)`,
    /** lg breakpoint: 992px */
    lg: `@media (min-width: ${breakpoints.lg}px)`,
    /** xl breakpoint: 1200px */
    xl: `@media (min-width: ${breakpoints.xl}px)`,
  },
  max: {
    /** sm breakpoint: 640px - 1 */
    sm: `@media (max-width: ${breakpoints.sm - 1}px)`,
    /** md breakpoint: 768px - 1 */
    md: `@media (max-width: ${breakpoints.md - 1}px)`,
    /** lg breakpoint: 992px - 1 */
    lg: `@media (max-width: ${breakpoints.lg - 1}px)`,
    /** xl breakpoint: 1200px - 1 */
    xl: `@media (max-width: ${breakpoints.xl - 1}px)`,
  },
}

export default mq;