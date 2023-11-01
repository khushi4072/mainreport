import React from 'react';
import './Navbar.css';
import logo from '../images/atstaylogo.webp';
import { Link } from 'react-router-dom';
export default function Navbar() {

  

  return (
    <div>
        <div className="nav">
            <div className="container-fluid nav-top p-2 d-flex justify-content-between">
                <div className="navtopleft">
                 <Link to="https://www.facebook.com/atraskitravel?mibextid=nW3QTL"> <i class="fa-brands fa-facebook-f mx-4" style={{color:"white"}}></i> </Link>
                 <Link to="https://www.instagram.com/atstaysbyatraski/?igshid=MzRlODBiNWFlZA%3D%3D"> <i class="fa-brands fa-instagram" style={{color:"white"}}></i></Link>
                  <span className="mx-3 emm" style={{color:"white"}}> <a style={{ color:"white"}} href="mailto:support@attravels.in">support@attravels.in</a></span>
                </div>

                <div className="navtopright">
                <span className="mx-3 calls" style={{color:"white"}}> <a href="tel:+9654862355" style={{ color:"white"}}><i class="fa-solid fa-phone fs-4 mx-1"></i>Call Now</a></span>
               <Link  to ="/signin"><span className="mx-3 log" style={{color:"white"}}>Login</span></Link>
               <Link to ="/signup"> <span className="mx-3 sig" style={{color:"white"}}>Signup</span></Link>

                </div>
            </div>

            <nav className="navbar navbar-expand-xl navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logoimg" />
        </Link>
<div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"  
>
          <span className="navbar-toggler-icon"></span>
        </button>

        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/attours" className="nav-link">
                ATTOURS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/atstays" className="nav-link"> 
                ATSTAYS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bloggerpage" className="nav-link">
                BLOGS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

        </div>

    </div>
  )
}
