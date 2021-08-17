import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Pilar = () => {
  return (
    <div class="pilars-area">
      <div class="fluid-container">
        <div class="row-grid">
          <div class="grid">
            <div class="pilars-item">
              <div class="pilarts-img">
                <StaticImage placeholder="blurred" src="../assets/images/pilars/img-1.png" alt="" />
              </div>
              <div class="pilars-text">
                <h2>Shahadah</h2>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="pilars-item">
              <div class="pilarts-img">
                <StaticImage placeholder="blurred" src="../assets/images/pilars/img-2.png" alt="" />
              </div>
              <div class="pilars-text">
                <h2>Salah</h2>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="pilars-item">
              <div class="pilarts-img">
                <StaticImage placeholder="blurred" src="../assets/images/pilars/img-4.png" alt="" />
              </div>
              <div class="pilars-text">
                <h2>Sawm</h2>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="pilars-item">
              <div class="pilarts-img">
                <StaticImage placeholder="blurred" src="../assets/images/pilars/img-5.png" alt="" />
              </div>
              <div class="pilars-text">
                <h2>Zakah</h2>
              </div>
            </div>
          </div>
          <div class="grid">
            <div class="pilars-item">
              <div class="pilarts-img">
                <StaticImage placeholder="blurred" src="../assets/images/pilars/img-6.png" alt="" />
              </div>
              <div class="pilars-text">
                <h2>Hajj</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pilar;