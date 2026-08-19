import React from 'react';
import Reviews from '../reusable/Reviews';
import ImageSlider from './ImageSlider';
import LeftAside from '../reusable/leftAside';
import StatsBanner from '../reusable/StatsBanner';
import { INTRO_SRIMWORKS, HOME_WEWORK, WHO_WE_ARE } from '../utils/constsnts';
import CoreValues from '../reusable/CoreValues';
import HeroSection from '../reusable/HeroWithLeftImg';
import WhatWeDo from '../reusable/WhatWeDo';

const Home = () => {
  return (
    <div className='outlet-render'>
      {/* 1. Hero Image Slider */}
      <ImageSlider />

      {/* 2. Enterprise Proof Stats Banner */}
      <StatsBanner />

      {/* 3. Introducing SRIM Works (Preserved 100%) */}
      <LeftAside {...INTRO_SRIMWORKS} />

      {/* 4. Verified Client Success Stories (9 European Case Studies) */}
      <Reviews />

      {/* 5. Who We Are */}
      <HeroSection {...WHO_WE_ARE} />

      {/* 6. Core Values */}
      <CoreValues />

      {/* 7. Practice Disciplines Matrix */}
      <WhatWeDo />

      {/* 8. Global Organizations We Work With */}
      <LeftAside {...HOME_WEWORK} />
    </div>
  );
};

export default Home;