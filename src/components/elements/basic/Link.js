import styled from '@emotion/styled';

import {colors} from "../../../utils/variables"

export const Link = styled("a")({
  position: "relative",
  color: colors.primary.default,
  ":hover": {
    color: colors.primary.dark
  }
})

export default Link;