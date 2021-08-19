import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header id="header" className="wpo-site-header wpo-header-style-3">
    <nav className="navigation navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="open-btn">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <StaticImage src="../assets/images/ponpesit.png" alt="logo" />
            <span className="title">Cahaya Islam</span>
          </a>
        </div>
        <div
          id="navbar"
          className="navbar-collapse collapse navbar-right navigation-holder"
        >
          <button className="close-navbar">
            <i className="ti-close"></i>
          </button>
          <ul className="nav navbar-nav">
            <li className="menu-item-has-children">
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
        <div className="cart-search-contact">
          <div className="btns">
            <a href="contact.html" className="theme-btn">
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
