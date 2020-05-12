import styled from '@emotion/styled';
import { rhythm } from "../../../utils/typography"

import { breakpoints } from "../../../utils/variables"
import mq from "../../../utils/mediaQueries";

export const Container = styled("div")({
  flexGrow: "1",
  position: "relative",
  width: "100%",
  maxWidth: breakpoints.xl,
  margin: "0 auto",
  padding:`${rhythm(1.5)} ${rhythm(.5)}`,
  [mq.min.md]: {
    padding:`${rhythm(3)} ${rhythm(3)}`
  }
}, ({flex, column, vertAlign = "center", vertPadding}) => ([
  flex && {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    [mq.max.md]: {
      flexDirection: "column"
    }
  },
  column && {
    flexDirection: "column"
  },
  vertAlign && {
    alignItems: vertAlign
  },
  vertPadding && {
    paddingTop: vertPadding,
    paddingBottom: vertPadding
  }
]))

export default Container;