import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  return (
    <footer class="wpo-site-footer">
      <div class="wpo-upper-footer">
        <div class="container">
          <div class="row">
            <div class="col col-lg-3 col-md-3 col-sm-6">
              <div class="widget about-widget">
                <div className="d-flex">
                  <div className="logo" href="index.html">
                    <StaticImage src="../assets/images/ponpesit.png" alt="logo" />
                  </div>
                  <span className="title">Cahaya Islam</span>
                </div>
                <p>Build and Earn with your online store with lots of cool and exclusive
                  wpo-features </p>
                <ul>
                  <li><a href="#"><i class="ti-facebook"></i></a></li>
                  <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                  <li><a href="#"><i class="ti-instagram"></i></a></li>
                  <li><a href="#"><i class="ti-google"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col col-lg-3 col-md-3 col-sm-6">
              <div class="widget link-widget">
                <div class="widget-title">
                  <h3>Service</h3>
                </div>
                <ul>
                  <li><a href="service-single.html">Islamic School</a></li>
                  <li><a href="service-single.html">Our Causes</a></li>
                  <li><a href="#">Our Mission</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="event.html">Our Event</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-lg-2 col-md-3 col-sm-6">
              <div class="widget link-widget">
                <div class="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="service-single.html">Services</a></li>
                  <li><a href="event.html">Semester</a></li>
                  <li><a href="index-2.html">Prayer Times</a></li>
                </ul>
              </div>
            </div>
            <div class="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
              <div class="widget market-widget wpo-service-link-widget">
                <div class="widget-title">
                  <h3>Contact </h3>
                </div>
                <p>online store with lots of cool and exclusive wpo-features</p>
                <div class="contact-ft">
                  <ul>
                    <li><i class="fi ti-location-pin"></i>28 Street, New York City, USA</li>
                    <li><i class="fi flaticon-call"></i>+000123456789</li>
                    <li><i class="fi flaticon-envelope"></i>ummah@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wpo-lower-footer">
        <div class="container">
          <div class="row">
            <div class="col col-xs-12">
              <p class="copyright">&copy; 2020 Rumah Qur'an Cahaya Islam. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;