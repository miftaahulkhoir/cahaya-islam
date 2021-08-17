import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Program = () => {
  return (
    <div class="service-area section-padding">
      <div class="container">
        <div class="service-wrap">
          <div class="row">
            <div class="col-lg-6 col-md-8">
              <div class="service-item">
                <div class="service-title">
                  <span>Sekolah Islam</span>
                  <h2>Carilah ilmu dari bayi sampai liang lahat.</h2>
                  <p>
                    Rumah Qur'an Cahaya Islam berkomitmen untuk menyediakan
                    Pendidikan Islam, Al'Quran, dan Sunnah Nabi Muhammad SAW
                    yang berkualitas bagi siswa/siswi yang membutuhkan
                    bimbingan.
                  </p>
                </div>
                <div class="routine-table">
                  <ul class="routne-head">
                    <li>Kalender Akademik</li>
                    <li>Mulai</li>
                    <li>Akhir</li>
                  </ul>
                  <ul>
                    <li>Pendaftaran</li>
                    <li>12.5.2020</li>
                    <li>1.7.2021</li>
                  </ul>
                  <ul>
                    <li>Ajarann Baru</li>
                    <li>17.8.2020</li>
                    <li>1.12.2021</li>
                  </ul>
                  <ul>
                    <li>Sidang Kelulusan</li>
                    <li>20.9.2020</li>
                    <li>8.12.2021</li>
                  </ul>
                </div>
                <div class="btns">
                  <a href="service-single.html" class="theme-btn-s3">
                    Ingin Tahu Lebih Banyak
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-lg-4">
              <div class="service-img">
                <StaticImage placeholder="blurred" src="assets/images/service/img-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Program
