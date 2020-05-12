import React from 'react'
import styled from "@emotion/styled"

import Layout from "../components/compositions/Layout"
import Container from "../components/elements/layout/Container"
import Button from "../components/elements/basic/Buttons"
import { HeroHuge } from "../components/compositions/Heroes"
import { rhythm } from "../utils/typography"

const HomeSmall = styled('small')({
  display: "block",
  fontSize: rhythm(1),
  fontFamily: "Montserrat",
  fontWeight: 400
})
const HomeEm = styled('span')({
  fontSize: "1.25em",
  fontFamily: "Montserrat",
  verticalAlign: "bottom",
})
const HomeTitle = styled(({ className }) => <span className={className}><HomeSmall>Real</HomeSmall> Sissy Talk</span>)({
  fontFamily: "Times New Roman",
})
const HomeDivider = styled(({ className }) => <span className={className}>|</span>)({
  display: "inline-block",
  margin: `4px ${rhythm(1)} 0`,
  verticalAlign: "top",
})
const HomeSubtitle = styled(({ className }) => {
  return <span className={className}>self <HomeEm>LOVE</HomeEm> <HomeDivider /> self <HomeEm>CARE</HomeEm> <HomeDivider /> self <HomeEm>EXPRESSION</HomeEm></span>
})({
  position: "relative",
  verticalAlign: "middle",
})

let homepageData = {
  data: {
    title: <HomeTitle />,
    subTitle: <HomeSubtitle />,
    image: "https://picsum.photos/id/1069/1200/800",
  },
  bgPosition: ""
}

const Homepage = () => <HeroHuge {...homepageData} />

export default Homepage
