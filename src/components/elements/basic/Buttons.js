import styled from '@emotion/styled'

import {rhythm} from "../../../utils/typography"
import {colors} from "../../../utils/variables"
import Link from "./Link"


export const Button = styled(Link)({
  display: "inline-block",
  padding: `${rhythm(.5)} ${rhythm(1)}`,
  border: `2px solid`,
}, ({kind = "primary", size = "medium"}) => [
  kind === "primary" && {...buttonStyles.colors.primary},
  kind === "secondary" && {...buttonStyles.colors.secondary},
  size === "small" && {...buttonStyles.sizes.small},
  size === "medium" && {...buttonStyles.sizes.medium},
  size === "large" && {...buttonStyles.sizes.large},
])

export default Button;

let buttonStyles = {
  colors: {
    primary: {
      color: colors.primary.default,
      background: colors.base.white.default,
      borderColor: colors.primary.default,
      ":hover": {
        color: colors.base.white.default,
        background: colors.primary.default,
      }
    }, 
    secondary: {
      color: colors.base.white.default,
      background: colors.primary.default,
      borderColor: colors.primary.default,
      ":hover": {
        color: colors.base.white.default,
        background: colors.primary.dark,
        borderColor: colors.primary.dark,
      }
    }
  },
  sizes:  {
    small: {
      fontSize: rhythm(.6),
      padding: `${rhythm(.25)} ${rhythm(.5)}`,
    },
    medium: {
      fontSize: rhythm(.75),
      padding: `${rhythm(.4)} ${rhythm(.75)}`,
    },
    large: {
      fontSize: rhythm(.9),
      padding: `${rhythm(.5)} ${rhythm(1)}`,
    },
  }
}
