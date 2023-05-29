import { useState } from 'react';

import logo from '@svg/logo.svg?v=2';

export default function AppHeader() {
  const [ menu, setMenu ] = useState(false);

  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="Logo" width="48" height="48" style={{ width: "48px" }}></img>
                </a>
                <button className={(menu === true) ? 'navbar-toggler mobile-menu-btn active' : 'navbar-toggler mobile-menu-btn' } type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation"
                  onClick={ e => { setMenu(!menu) }}>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div className={ (menu === true) ? 'collapse navbar-collapse sub-menu-bar show' : 'collapse navbar-collapse sub-menu-bar' } id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a href="#home" className="page-scroll"
                        aria-label="Toggle navigation" onClick={ e => { setMenu(false) }}>accueil</a>
                    </li>
                    <li className="nav-item">
                      <a href="#services" className="page-scroll"
                        aria-label="Toggle navigation" onClick={ e => { setMenu(false) }}>services</a>
                    </li>
                    <li className="nav-item">
                      <a href="#pricing" className="page-scroll"
                        aria-label="Toggle navigation" onClick={ e => { setMenu(false) }}>prix</a>
                    </li>
                    <li className="nav-item">
                      <a href="#contact" className="page-scroll" aria-label="Toggle navigation" onClick={ e => { setMenu(false) }}>contact</a>
                    </li>
                  </ul>
                </div>
                <div className="button add-list-button">
                  <a href="#pricing" className="btn page-scroll">Commandez maintenant</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
