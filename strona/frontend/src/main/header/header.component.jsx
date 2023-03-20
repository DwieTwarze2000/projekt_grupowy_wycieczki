import React from 'react'
import logo from '../../images/logo.png'
const HeaderComponent = () => {
  return (
    <header>
      <div className="logo"></div>
      <img src={logo} className="logoPic" />
    </header>
  )
}

export default HeaderComponent
