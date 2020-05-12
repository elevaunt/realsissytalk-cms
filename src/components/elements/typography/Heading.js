import React from "react"
import styled from '@emotion/styled';
import { rhythm } from "../../../utils/typography";

export const Heading = styled(({kind = "h1", ...props}) => {
  let Type = kind
  return <Type {...props}/>
})({
  position: "relative",
  marginTop: 0,
  marginBottom: rhythm(.5)
})

export default Heading;