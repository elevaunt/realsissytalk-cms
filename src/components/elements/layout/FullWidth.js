import styled from '@emotion/styled'

let FullWidth = styled("section")(({image, bgPosition}) => {
  return {
    width: "100vw",
    minHeight: "400px",
    backgroundImage: image && `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
    backgroundSize: image && "cover",
    backgroundPosition: image && bgPosition ? bgPosition : "bottom",
  }
})

export default FullWidth;