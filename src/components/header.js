import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header id="header" class="wpo-site-header wpo-header-style-3">
    <nav class="navigation navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="open-btn">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">
            <StaticImage src="../assets/images/logo.png" alt="logo" />
          </a>
        </div>
        <div
          id="navbar"
          class="navbar-collapse collapse navbar-right navigation-holder"
        >
          <button class="close-navbar">
            <i class="ti-close"></i>
          </button>
          <ul class="nav navbar-nav">
            <li class="menu-item-has-children">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="about.html">Program</a>
            </li>
            <li>
              <a href="about.html">Staff Pengajar</a>
            </li>
            <li>
              <a href="about.html">Alamat</a>
            </li>
            <li>
              <a href="about.html">Kontak Kami</a>
            </li>
          </ul>
        </div>
        <div class="cart-search-contact">
          <div class="btns">
            <a href="contact.html" class="theme-btn">
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
