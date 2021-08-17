/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { withPrefix } from "gatsby-link"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="jquery"
      src={withPrefix("js/jquery.min.js")}
      type="text/javascript"
    />,
    <script
      key="bootstrap"
      src={withPrefix("js/bootstrap.min.js")}
      type="text/javascript"
    />,
    <script
      key="circleProgress"
      src={withPrefix("js/circle-progress.min.js")}
      type="text/javascript"
    />,
    <script
      key="jqueryPluginCollection"
      src={withPrefix("js/jquery-plugin-collection.js")}
      type="text/javascript"
    />,

    <script
      key="etet"
      src={withPrefix("js/script.js")}
      type="text/javascript"
    />,
  ])
}
