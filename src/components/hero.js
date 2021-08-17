import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Hero = () => {
  return (
    <section class="hero hero-style-2">
      <div class="hero-slider">
        <div class="slide">
          <div class="container">
            <div class="row">
              <div class="col col-lg-8 col-md-7 slide-caption">
                <div class="slide-top">
                  <span>Mari Mengenal Islam</span>
                </div>
                <div class="slide-title">
                  <h2>
                    Read! In the Name of your <br /> Lord, Who has created
                  </h2>
                </div>
                <div class="slide-subtitle">
                  <p>
                    Kami adalah Organisasi Pendidikan, yang memperkenalkan
                    mengenai Agama Islam
                    <br /> dan Al'Quran!
                  </p>
                </div>
                <div class="btns">
                  <a href="about.html" class="theme-btn">
                    Lihat Lebih Banyak
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="right-vec">
            <StaticImage placeholder="blurred" src="../assets/images/slider/img-3.png" alt="" />
            <div class="right-border">
              <div class="right-icon">
                <i class="fi flaticon-quran"></i>
              </div>
              <div class="right-icon">
                <i class="fi flaticon-taj-mahal-1"></i>
              </div>
              <div class="right-icon">
                <i class="fi flaticon-allah-word"></i>
              </div>
              <div class="right-icon">
                <i class="fi flaticon-muhammad-word"></i>
              </div>
              <div class="right-icon">
                <i class="fi flaticon-prayer"></i>
              </div>
              <div class="right-icon">
                <i class="fi flaticon-business-and-finance"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
