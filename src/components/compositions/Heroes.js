import React from 'react'
import styled from '@emotion/styled'

import mq from '../../utils/mediaQueries'

import FullWidth from "../elements/layout/FullWidth"
import Container from "../elements/layout/Container"
import Heading from "../elements/typography/Heading"


const Hero = styled(FullWidth)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundAttachment: `fixed`,
  [mq.min.md]: {
    justifyContent: "flex-end",
  }
});
const HeroFullScreen = styled(Hero)({
  width: "100vw",
  height: "100vh"
})
const HeroCopy = styled("div")({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'left',
  flexDirection: 'column',
  textAlign: "center"
}, ({align}) => ({
  textAlign: align,
  [mq.min.md]: {
    // maxWidth: "80%",
    textAlign: align ? align : "left",
  }
}))
const HeroTitle = styled((props) => {
  return <Heading kind="h1" {...props} />
})({
  // boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  // backgroundColor: 'rgb(255, 68, 0)',
  color: 'white',
  // lineHeight: '1',
  padding: '0.25em',
  margin: `0`,
  fontWeight: "bold"
})
const HeroSubTitle = styled((props) => {
  return <Heading kind="h3" {...props} />
})({
  // boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  // backgroundColor: 'rgb(255, 68, 0)',
  color: 'white',
  // lineHeight: '1',
  padding: '0.25em',
  margin: `0`
})

export const Hero01 = ({ bgPosition = `top left`, data}) => {
  return (
    <Hero image={data.image} bgPosition={bgPosition}>
      <HeroCopy>
        <HeroTitle>
          {data.title}
        </HeroTitle>
        <HeroSubTitle>
          {data.subTitle}
        </HeroSubTitle>
      </HeroCopy>
    </Hero>
  )
}

export const Hero02 = ({ bgPosition = `top left`, data}) => {
  return (
    <Hero image={data.image} bgPosition={bgPosition}>
      <Container flex>
        <HeroCopy align="center">
          <HeroTitle>
            {data.title}
          </HeroTitle>
          <HeroSubTitle>
            {data.subTitle}
          </HeroSubTitle>
        </HeroCopy>
      </Container>
    </Hero>
  )
}

export const HeroHuge = ({ bgPosition = `top left`, data}) => {
  return (
    <HeroFullScreen image={data.image} bgPosition={bgPosition}>
      <Container flex>
        <HeroCopy align="center">
          <HeroTitle>
            {data.title}
          </HeroTitle>
          <HeroSubTitle>
            {data.subTitle}
          </HeroSubTitle>
        </HeroCopy>
      </Container>
    </HeroFullScreen>
  )
}

export default {
  Hero01,
  Hero02
};