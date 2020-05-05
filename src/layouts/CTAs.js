import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from "../utils/typography"

import Button from "../components/Buttons"
import FullWidth from "../components/FullWidth"

const BackgroundImageFixed = styled(FullWidth)(({ image }) => ({
  backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
  backgroundPosition: `top left`,
  backgroundAttachment: `fixed`,
}));

const Title = styled("h2")({
  padding: rhythm(2)
})
const Description = styled("p")({
  
})


export const SimpleCtaSection = ({data}) => {
  return (
    <FullWidth>
      {data.title && <Title children={data.title} />}
      <Description children={data.description} />
      <Button href={data.url}>{data.cta}</Button>
    </FullWidth>
  )
}