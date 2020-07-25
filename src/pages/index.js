import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled"

// import EmotionalDetox from "./emotional-detox"

import { HeroHuge } from "../components/compositions/Heroes"
import { rhythm } from "../utils/typography"
import PlainPageWrapper from "../components/compositions/PlainPageWrapper"
import mq from "../utils/mediaQueries"

const HomeSmall = styled('small')({
  display: "block",
  color: "#fff",
  fontSize: ".45em",
  fontFamily: "Montserrat",
  fontWeight: 400
})
const HomeEm = styled('span')({
  fontSize: "1.25em",
  fontFamily: "Montserrat",
  verticalAlign: "bottom",
})
const HomeTitle = styled(({ className }) => <span className={className}><HomeSmall>Real</HomeSmall> Sissy Talk</span>)({
  fontFamily: "cuisine,sans-serif",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: rhythm(4),
  [mq.min.md]: {
    fontSize: rhythm(5)
  }
})
const NoBreak = styled('span')({
  whiteSpace: "nowrap"
})
const HomeDivider = styled(({ className }) => <span className={className}>&mdash;</span>)({
  display: "inline-block",
  margin: `4px ${rhythm(.5)} 0`,
  verticalAlign: "top",
  [mq.max.md]: {
    display: "block",
    color: "transparent",
    height: rhythm(.5)
  }
}, ({hideMd, hideLg}) => ([
  hideMd && {
    [mq.max.md]: {
      display: 'none'
    }
  },
  hideLg && {
    [`@media (min-width: 1110px)`]: {
      display: 'none'
    }
  }
]))
const HomeSubtitle = styled(({ className }) => {
  return (
    <span className={className}>
      <HomeDivider hideMd /> 
      <NoBreak>self <HomeEm>LOVE</HomeEm></NoBreak> 
      <HomeDivider /> 
      <NoBreak>
        self <HomeEm>CARE</HomeEm>
      </NoBreak> 
      <HomeDivider /> 
      <NoBreak>
      	<HomeDivider hideMd hideLg /> 
      	<NoBreak>
      	  self <HomeEm>EXPRESSION</HomeEm>
      	</NoBreak>
      	<HomeDivider hideMd /> 
      </NoBreak>
    </span>
  )
})({
  position: "relative",
  verticalAlign: "middle",
})

let homepageData = {
  data: {
    title: <HomeTitle />,
    subTitle: <HomeSubtitle />,
    image: "https://picsum.photos/id/53/1200/800",
  },
  bgPosition: ""
}

const Homepage = () => {
  return (
    <PlainPageWrapper>
      <HeroHuge {...homepageData} subTitleStyles={{color: "#fff"}}/>
    </PlainPageWrapper>
  )
}

export default Homepage
