import React from 'react';
import { XlviLoader } from 'react-awesome-loaders';

const IconLoader = () => (
  <div>
    <XlviLoader
      boxColors={['#EF4444', '#F59E0B', '#6366F1']}
      desktopSize={'128px'}
      mobileSize={'100px'}
    />
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <lottie-player
      src="https://lottie.host/626b8f3c-889e-44af-afb1-b3b71ba8c64d/q2Lzp8qhGB.json"
      background="##ffffff"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      controls
      autoplay
      direction="1"
      mode="normal"></lottie-player>
  </div>
);

export default IconLoader;
