import styled from '@emotion/styled'

let FullWidth = styled("section")(({image}) => {
  return {
  width: "100vw",
  minHeight: "400px",
  backgroundImage: image && `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
  backgroundSize: image && "cover",
  backgroundPosition: image && "bottom",
}})

export default FullWidth;