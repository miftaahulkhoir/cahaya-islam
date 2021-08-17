import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div class="wpo-about-area section-padding">
      <div class="container">
        <div class="wpo-about-wrap">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="wpo-about-img-3">
                <StaticImage src="../assets/images/about3.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6 colsm-12">
              <div class="wpo-about-text">
                <div class="wpo-section-title">
                  <span>Tentang Kami</span>
                  <h2>Menuntut ilmu adalah kewajiban setiap muslim</h2>
                </div>
                <p>
                  Kebangkitan umat Islam ke puncak peradaban dalam kurun waktu
                  empat dekade didasarkan pada penekanan Islam pada
                  pembelajaran. Hal ini terlihat jelas ketika melihat Al-Qur'an
                  dan hadits Nabi Muhammad SAW yang sarat dengan referensi
                  pembelajaran, pendidikan, observasi.
                </p>
                <div class="btns">
                  <a href="about.html" class="theme-btn" tabindex="0">
                    Lihat Lebih Banyak
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="timer-section">
          <div class="row">
            <div class="col-md-5">
              <div class="timer-text">
                <h2>Waktu Sholat</h2>
                <p>Waktu Sholat Untuk Wilayah Jakarta dan sekitarnya</p>
                <span>Selasa, 17 Agustus 2021</span>
              </div>
            </div>
            <div class="col-md-5 col-md-offset-1">
              <div class="timer-num">
                <ul>
                  <li>
                    Shubuh<span>05:47</span>
                  </li>
                  <li>
                    Dzuhur<span>12:34</span>
                  </li>
                  <li>
                    Ashr<span>15:35</span>
                  </li>
                  <li>
                    Maghrib<span>17:58</span>
                  </li>
                  <li>
                    Isya<span>19:15</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="timer-shape1">
            <StaticImage placeholder="blurred" src="../assets/images/prayer-shape/2.png" alt="" />
          </div>
          <div class="timer-shape2">
            <StaticImage placeholder="blurred" src="../assets/images/prayer-shape/1.png" alt="" />
          </div>
          <div class="timer-shape3">
            <StaticImage placeholder="blurred" src="../assets/images/prayer-shape/3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
