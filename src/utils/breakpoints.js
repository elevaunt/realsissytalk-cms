
const breakpoints = [640, 768, 992, 1200]

export const bp = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)