import React from 'react'

import PlainPageWrapper from "./PlainPageWrapper"
import Footer from './Footer'
import Navbar from './Navbar'

const TemplateWrapper = ({ children }) => {
  return (
    <PlainPageWrapper>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </PlainPageWrapper>
  )
}

export default TemplateWrapper
