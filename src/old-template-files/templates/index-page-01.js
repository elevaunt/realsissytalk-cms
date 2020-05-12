// import React from 'react'
// import PropTypes from 'prop-types'
// import styled from '@emotion/styled'
// import { Link as GatsbyLink, graphql } from 'gatsby'

// import Button from "../../components/elements/basic/Buttons"

// import Layout from '../../components/compositions/Layout'
// import {Hero01} from '../../components/compositions/Heroes'
// import Features from '../../components/compositions/Features'
// import BlogRoll from '../../components/compositions/BlogRoll'
// import CTA from "../../components/compositions/CTAs"


// export const IndexPageTemplate = ({
//   hero,
//   ctaSimple,
//   mainpitch,
//   description,
//   intro,
// }) => (
//   <main>
//     <Hero01 data={hero} />
//     <CTA.SimpleSection data={ctaSimple} />
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="section">
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <div className="content">
//                 <div className="content">
//                   <div className="tile">
//                     <h1 className="title">{mainpitch.title}</h1>
//                   </div>
//                   <div className="tile">
//                       <h3 className="subtitle">{mainpitch.description}</h3>
//                   </div>
//                 </div>
//                 <Features gridItems={intro.blurbs} />
//                 <div className="columns">
//                   <div className="column is-12 has-text-centered">
//                     <GatsbyLink className="btn" to="/products">
//                       See all products
//                     </GatsbyLink>
//                   </div>
//                 </div>
//                 <div className="column is-12">
//                   <h3 className="has-text-weight-semibold is-size-2">
//                     Latest stories
//                   </h3>
//                   <BlogRoll />
//                   <div className="column is-12 has-text-centered">
//                     <GatsbyLink className="btn" to="/blog">
//                       Read more
//                     </GatsbyLink>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </main>
// )

// IndexPageTemplate.propTypes = {
//   hero: PropTypes.object,
//   ctaSimple: PropTypes.object,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         hero={frontmatter.hero}
//         ctaSimple={frontmatter.ctaSimple}
//         mainpitch={frontmatter.mainpitch}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//       />
//     </Layout>
//   )
// }

// // Loop through each component, 
// // put it in the right order and give it the proper props

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         hero {
//           title
//           subTitle
//           image {
//             childImageSharp {
//               fluid(maxWidth: 2048, quality: 100) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         ctaSimple {
//           title
//           description
//           cta
//           url
//         }
//         mainpitch {
//           title
//           description
//           testField
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `
