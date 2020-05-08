import React from 'react'
import styled from '@emotion/styled'

import mq from '../../utils/mediaQueries'

import FullWidth from "../elements/layout/FullWidth"
import Container from "../elements/layout/Container";


const Hero = styled(FullWidth)(({ image }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundPosition: `top left`,
  backgroundAttachment: `fixed`,
  [mq.min.md]: {
    justifyContent: "flex-end",
  }
}));
const HeroCopy = styled("div")({
  display: 'flex',
  height: '150px',
  lineHeight: '1',
  justifyContent: 'space-evenly',
  alignItems: 'left',
  flexDirection: 'column',
  textAlign: "center",
  [mq.min.md]: {
    maxWidth: "50%",
    textAlign: "left",
    // justifyContent: "center",
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