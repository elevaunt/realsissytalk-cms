import React from 'react'
import styled from "@emotion/styled"
import { withPrefix } from 'gatsby'

import Container from "../../components/elements/layout/Container"
import Column from "../../components/elements/layout/Column"
import Heading from "../../components/elements/typography/Heading"
import Link from "../../components/elements/basic/Link"
import { Hero02 } from "../../components/compositions/Heroes"
import { colors } from "../../utils/variables"
import { rhythm } from "../../utils/typography"
import PlainPageWrapper from "../../components/compositions/PlainPageWrapper"
import mq from "../../utils/mediaQueries"

let heroTitleStyles = {
  fontFamily: "cuisine,sans-serif",
  fontWeight: 500,
}

const BigNum = styled("span")({
  fontSize: rhythm(5),
  lineHeight: rhythm(2.5)
})

const BodyHeading = styled(Heading)({
  color: colors.primary.dark,
  fontFamily: "cuisine,sans-serif",
  fontWeight: 500,
  fontSize: rhythm(1.5)
})

const RegisterImg = styled("div")({
  height: 140,
  background: `url(${withPrefix('/')}img/register-here.jpg) no-repeat center top`,
  backgroundSize: "cover",
})

const Sidebar = styled(Column)({
  [mq.min.md]: {
    marginLeft: rhythm(1.25),
  }
})

const InstagramPhotos = styled('div')({
  img: {
    display: "block",
    marginBottom: 0,
    background: colors.primary.dark,
    border: `solid ${rhythm(.25)} ${colors.primary.dark}`,
    borderLeftWidth: rhythm(.5),
    borderRightWidth: rhythm(.5),
    "&:first-child": {
      borderTopWidth: rhythm(.5)
    },
    "&:last-of-type": {
      borderBottomWidth: rhythm(.5)
    }
  },
})

const AdditionalLinks = styled("div")({
  marginTop: rhythm(1),
  h4: {
    fontSize: rhythm(1)
  },
})
const Products = styled('div')({
  textAlign: "center",
  p: {
    marginBottom: rhythm(1.5)
  },
  img: {
    display: "block",
    maxWidth: 300,
    margin: `0 auto ${rhythm(.5)}`
  }
})


let heroData = {
  title: <span><BigNum>22</BigNum> Day Emotional Detox!</span>,
  subTitle: "Are you READY to reboot your biochemistry?",
  image: `${withPrefix('/')}img/lemons.jpg`
}

const EmotionalDetox = () => {
  return (
    <PlainPageWrapper>
      <Hero02 data={heroData} bgPosition={'center -433px'} titleStyles={heroTitleStyles} />
      <Container style={{paddingBottom: 0}}>
        <Heading kind="h2" style={{ textAlign: "center", color: "#ffd457"}}>Let's dive in to 22 days of <br/> self LOVE, self CARE and self EXPRESSION</Heading>
      </Container>
      <Container flex vertAlign="flex-start">
        <Column style={{ flex: "1 0 25%" }}>
          <div>
            <BodyHeading kind="h3">The Why</BodyHeading>
            <p>We change our lives by changing the things we do daily. The SECRET to success is found in your daily routine. Detox the emotional baggage that may have settled in as an unwanted house guest. We are born to be FREE! We grow in abundance and success as we strengthen our MINDS! We own our thoughts and feelings.</p>
          </div>
          <div>
            <BodyHeading kind="h3">The How</BodyHeading>
            <p>22 Days will Create new Patterns in your life to unite with your unique inner voice!</p>
            <ul>
              <li>Learn a 5 Minute Daily Neurosensory Method that releases toxic thoughts and activates your body's self-healing mechanisms.</li>
              <li>Build a solid Emotional Foundation that nourishes self love.</li>
              <li>Create daily actions that flow into a toolkit preparing you for whatever comes your way</li>
            </ul>
          </div>
          <RegisterImg />
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdnXQmcS0nzMGWIHgK7Bx2k0XTDNUVeuZbAVEIAhonGIV3yLw/viewform?embedded=true" width="640" height="2650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </Column>
        <Sidebar style={{ flex: "1 0" }}>
          <InstagramPhotos>
            <img src={`${withPrefix('/')}img/detox-supplies.jpg`}/>
            <img src={`${withPrefix('/')}img/shopping-cart.png`}/>
            <img src={`${withPrefix('/')}img/you-have-it-all.png`}/>
          </InstagramPhotos>
          <AdditionalLinks>
            <Heading kind="h4">Click here to purchase product</Heading>
            <Products>
              <p><Link href="https://doterra.me/1j2r48Qd"><img src={`${withPrefix("/")}img/llv.png`} /> Life Long Vitality</Link></p>
              <p><Link href="https://doterra.me/7GjSrgua"><img src={`${withPrefix("/")}img/pb-assist.jpg`} style={{maxWidth: 125}}/> PB Assits (Probiotic)</Link></p>
              <p><Link href="https://doterra.me/BSqrUOZc"><img src={`${withPrefix("/")}img/adaptiv.png`} style={{maxWidth: 125}}/> Adaptiv Capsules</Link></p>
              <p><Link href="https://doterra.me/CdLFml7M"><img src={`${withPrefix("/")}img/lemon-eo.jpeg`} /> 15ml Lemon EO</Link></p>
              <p><img src={`${withPrefix("/")}img/TerraZyme.jpg`} style={{ maxWidth: 190 }}/> TerraZyme</p>
            </Products>
            <p>If you're ready to get a doTERRA account for 25% off products <Link href="https://doterra.me/eAAgNdGU">click here</Link></p>
          </AdditionalLinks>
        </Sidebar>
      </Container>
    </PlainPageWrapper>
  )
}

export default EmotionalDetox
