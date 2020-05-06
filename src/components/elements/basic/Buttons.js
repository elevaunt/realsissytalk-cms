import React from 'react'
import styled from '@emotion/styled'

let buttonColor = "blush";

export const Button = styled("a")({
  display: "inline-block",
  padding: "1em 2em",
  color: buttonColor,
  border: `2px solid ${buttonColor}`,
  background: "none",
  ":hover": {
    color: "white",
    background: buttonColor
  }
})

export default Button;