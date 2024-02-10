import React from 'react'
import logo from "../assets/logo.png"
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md Nav_main container-fluid">
  <div className="container gx-0">
    <a className="navbar-brand" href="#">
    <div className="logo-container">
            <img className="image" src={logo} alt="" />
            <div className="logo-text">
              <h1>Yeşilçam Kahve Evi</h1>
            </div>
          </div>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      </ul>
      <form className="d-flex" role="search">
        <div className='icons'>
         <img src="   https://cdn-icons-png.flaticon.com/512/3219/3219333.png " 
         width="70" 
         height="70" 
         alt="" title="" 
         className="img-small"/>
        </div>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar