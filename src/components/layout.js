/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, withPrefix } from "gatsby"

import Header from "./header"
import useScript from "../hooks/useScript"
import Footer from "./footer"

const Layout = ({ children }) => {
  useScript(withPrefix("js/jquery.min.js"))
  useScript(withPrefix("js/bootstrap.min.js"))
  useScript(withPrefix("js/circle-progress.min.js"))
  useScript(withPrefix("js/jquery-plugin-collection.js"))
  useScript(withPrefix("/js/script.js"))

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
