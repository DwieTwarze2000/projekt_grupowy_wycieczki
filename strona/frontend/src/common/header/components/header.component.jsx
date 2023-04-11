import React from 'react';
import logo from '../../../images/logo.png';
const HeaderComponent = () => {
  return (
    <header>
      <div className="logo-background"></div>
      <img src={logo} className="logo" />
    </header>
  );
};

export default HeaderComponent;
