import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroSection.css';
import image1 from './backround.jpg';
import image2 from './backround2.jpg';


const HeroSection = () => {
  return (
    <div className="HeroSection">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src={image1} alt="Slide 1" />
          <div className="HeroSectionContent1">
            <div className="HeroSectionTitle">
              <h1>BINE ATI VENIT!</h1>
            </div>
            <div className="HeroSectionDescription">
              <p>Descoperiti colectia noastra de produse de inalta calitate.</p>
            </div>
            <div className="HeroSectionButton">
              <button>Cumpara acum</button>
            </div>
          </div>
        </div>
        <div>
  <img src={image2} alt="Slide 2" />
  <div className="HeroSectionContent2">
    <div className="HeroSectionTitle">
      <h1>Promotie speciala!</h1>
    </div>
    <div className="HeroSectionDescription2">
      <h2>BENEFICIATI ACUM DE URMATOARELE REDUCERI:</h2>
      <div className="DiscountList">
        <p>550 lei - 10%</p>
        <p>1150 lei - 15%</p>
        <p>1550 lei - 20%</p>
        <p>1850 lei - 25%</p>
      </div>
    </div>
    <div className="HeroSectionButton">
      <button className='HeroSectionButton2'>Vezi ofertele</button>
    </div>
  </div>
</div>
      </Carousel>
    </div>
  );
};

export default HeroSection;