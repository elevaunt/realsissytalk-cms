import React from 'react'
import styled from '@emotion/styled'

import {bp} from '../utils/breakpoints'

import FullWidth from "../components/FullWidth"


const Hero = styled(FullWidth)(({ image }) => ({
  backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
  backgroundPosition: `top left`,
  backgroundAttachment: `fixed`,
  [bp[1]]: {
    justifyContent: "flex-end",
  }
}));
const HeroCopy = styled("div")({
  display: 'flex',
  height: '150px',
  lineHeight: '1',
  justifyContent: 'space-around',
  alignItems: 'left',
  flexDirection: 'column',
  textAlign: "center",
  [bp[1]]: {
    maxWidth: "50%",
    textAlign: "left"
  }
})
const HeroTitle = styled("h1")({
  boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  backgroundColor: 'rgb(255, 68, 0)',
  color: 'white',
  lineHeight: '1',
  padding: '0.25em',
})
const HeroSubTitle = styled("h3")({
  boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  backgroundColor: 'rgb(255, 68, 0)',
  color: 'white',
  lineHeight: '1',
  padding: '0.25em',
})

export const Hero01 = ({data}) => {
  return (
    <Hero image={data.image} >
      <HeroCopy>
        <HeroTitle className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
          {data.title}
        </HeroTitle>
        <HeroSubTitle className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
          {data.subheading}
        </HeroSubTitle>
      </HeroCopy>
    </Hero>
  )
}

export default {
  Hero01
};