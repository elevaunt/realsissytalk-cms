import styled from '@emotion/styled';
import { rhythm } from "../../../utils/typography"

import { breakpoints } from "../../../utils/variables"
import mq from "../../../utils/mediaQueries";

export const Container = styled("div")({
  flexGrow: "1",
  position: "relative",
  width: "auto",
  maxWidth: breakpoints.xl,
  margin: "0 auto",
  padding:`${rhythm(1.5)} ${rhythm(1)}`,
  [mq.min.md]: {
    padding:`${rhythm(3)} ${rhythm(3)}`
  }
}, ({flex, column, vertPadding}) => ([
  flex && {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  column && {
    flexDirection: "column"
  },
  vertPadding && {
    paddingTop: vertPadding,
    paddingBottom: vertPadding
  }
]))

export default Container;