import styled from '@emotion/styled';

import {colors} from "../../../utils/variables"

export const Link = styled("a")({
  position: "relative",
  color: colors.primary.dark,
  ":hover": {
    color: colors.primary.default
  }
})

export default Link;