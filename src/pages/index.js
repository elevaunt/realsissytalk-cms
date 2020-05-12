import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled"

import { HeroHuge } from "../components/compositions/Heroes"
import { rhythm } from "../utils/typography"
import PlainPageWrapper from "../components/compositions/PlainPageWrapper"

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
  fontSize: rhythm(5)
})
const HomeDivider = styled(({ className }) => {
  // const [isMobile, setIsMobile] = useState(window.outerWidth < 768)
  // let checkViewportWidth = () => {
  //   if (window.outerWidth < 768) {
  //     setIsMobile(true)
  //   } else {
  //     setIsMobile(false)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", checkViewportWidth)
  // }, [])
  // console.log(isMobile)
  return <span className={className}>|</span>
})({
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
