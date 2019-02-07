import React from 'react';
import Logo from './Logo.png'; // Tell Webpack this JS file uses this image

//console.log(Logo); // /qa.png

function Logo() {
  // Import result is the URL of your image
  return <img src={Logo} alt="Logo" />;
}

export default Logo;