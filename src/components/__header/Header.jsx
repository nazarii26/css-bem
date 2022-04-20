import React from 'react'
import './__header.scss'

export const Header = () => {
  <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />;
  <link href="https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic" rel="stylesheet" />;

  return (
    <div className="wrapper">
      <header>
        <div className="header-line _container">
          <div className="logo">
            <button className="logo__button">GENIUS</button>
          </div>
          <div className="list">
            <nav className="menu">
              <ul className="menu__list">
                <li ><a className="menu__item" href="">PREISE</a></li>
                <li ><a className="menu__item" href="">REFERENZEN</a></li>
                <li ><a className="menu__item" href="">KONTAKT</a></li>
              </ul>
            </nav>
            <div className="language">
              <select className="language__selector" name="" id="">
                <option value="eng">EN</option>
                <option value="ukr">UA</option>
                <option value="ger">DE</option>
              </select>
            </div>
          </div>
        </div>
      </header >
    </div>


  )
}
