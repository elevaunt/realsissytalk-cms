import React from 'react'
import styled from "@emotion/styled"

import Container from "../../components/elements/layout/Container"
import Column from "../../components/elements/layout/Column"
import Heading from "../../components/elements/typography/Heading"
import Button from "../../components/elements/basic/Buttons"
import { Hero02 } from "../../components/compositions/Heroes"
import { colors } from "../../utils/variables"
import { rhythm } from "../../utils/typography"

let heroData = {
  title: "22 Day Emotional Detox!",
  subTitle: "Are you READY to reboot your biochemistry?",
  image: "https://picsum.photos/id/1005/900/600"
}

const RegisterColumn = styled(Column)({
  textAlign: "center",
  minWidth: "33%",
  marginLeft: rhythm(2),
  padding: `${rhythm(1)} ${rhythm(1.2)}`,
  backgroundColor: colors.primary.default,
})


const EmotionalDetox = () => {
  return (
    <div>
      <Hero02 data={heroData} bgPosition={'bottom center'} />
      <Container style={{paddingBottom: 0}}>
        <Heading kind="h2" style={{textAlign: "center"}}>Let's dive in to 22 days of <br/> self LOVE, self CARE and self EXPRESSION</Heading>
      </Container>
      <Container flex vertAlign="flex-start">
        <div>
          <div>
            <Heading kind="h3">The Why</Heading>
            <p>We change our lives by changing the things we do daily. The SECRET to success is found in your daily routine. Detox the emotional baggage that may have settled in as an unwanted house guest. We are born to be FREE! We grow in abundance and success as we strengthen our MINDS! We own our thoughts and feelings.</p>
          </div>
          <div>
            <Heading kind="h3">The How</Heading>
            <p>22 Days will Create new Patterns in your life to unite with your unique inner voice!</p>
            <ul>
              <li>Learn a 5 Minute Daily Neurosensory Method that releases toxic thoughts and activates your body's self-healing mechanisms.</li>
              <li>Build a solid Emotional Foundation that nourishes self love.</li>
              <li>Create daily actions that flow into a toolkit preparing you for whatever comes your way</li>
            </ul>
          </div>
        </div>
        <RegisterColumn>
          <Heading kind="h4">Register Now!</Heading>
          <Button>Register Now!</Button>
        </RegisterColumn>
      </Container>
    </div>
  )
}

export default EmotionalDetox
