import styled from '@emotion/styled'

let FullWidth = styled("section")((image) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  minHeight: "400px",
  padding: "10em 0",
  backgroundSize: image && "cover",
  backgroundPosition: image && "bottom",
}))

export default FullWidth;