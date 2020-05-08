import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from "../../utils/typography"

import Button from "../elements/basic/Buttons"
import FullWidth from "../elements/layout/FullWidth"
import Container from "../elements/layout/Container"

const BackgroundImageFixed = styled(FullWidth)(({ image }) => ({
  backgroundPosition: `top left`,
  backgroundAttachment: `fixed`,
}));

const Title = styled("h2")({

  padding: `${rhythm(1)} 0`
})
const Description = styled("p")({})


export const SimpleSection = ({data}) => {
  return data ? (
    <FullWidth>
      <Container flex column >
        {data.title && <Title children={data.title} />}
        {data.description && <Description children={data.description} />}
        {data.cta && <Button href={data.url} size="small">{data.cta}</Button>}
        {data.cta && <Button href={data.url} size="medium">{data.cta}</Button>}
        {data.cta && <Button href={data.url} size="large">{data.cta}</Button>}
      </Container>
    </FullWidth>
  ) : null
}

export default {
  SimpleSection
}