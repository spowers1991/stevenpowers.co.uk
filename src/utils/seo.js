/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title='Steven Powers'
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `title`,
          content: 'Steven Powers',
        },
        {
          name: `description`,
          content: 'I am Steven Powers, a professional Web Developer. I am currently very happily working for a successful agency in Mirfield, West Yorkshire in the United Kingdom.',
        },
        {
          property: `og:title`,
          content: 'I am Steven Powers, a professional Web Developer. I am currently very happily working for a successful agency in Mirfield, West Yorkshire in the United Kingdom.',
        },
        {
          property: `og:description`,
          content: 'I am Steven Powers, a professional Web Developer. I am currently very happily working for a successful agency in Mirfield, West Yorkshire in the United Kingdom.',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: 'I am Steven Powers, a professional Web Developer. I am currently very happily working for a successful agency in Mirfield, West Yorkshire in the United Kingdom.',
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: 'Steven Powers',
        },
        {
          name: `twitter:description`,
          content: 'I am Steven Powers, a professional Web Developer. I am currently very happily working for a successful agency in Mirfield, West Yorkshire in the United Kingdom.',
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  //title: PropTypes.string.isRequired,
}

export default Seo
