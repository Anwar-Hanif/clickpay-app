import React from 'react'
import Navbar from '../navbar/Navbar'
import {Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
          <div className="dash_sidebar ">
              <div className="logo">
                  <Link to="#"><img src="assets/images/logo.png" alt=""/></Link>
              </div>
              <Navbar/>
          </div>
          <div className="dash_header">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="dash_head_left">
                              <div className="hamburger_icon">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                              <h3>Dashboard</h3>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="hdr_mid">

                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="hdr_right text-end">
                              <ul>
                                  <li><Link to="#"><span><i className="fa fa-bell"></i></span></Link></li>
                                  <li><Link to="#" className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"><span><i className="fa fa-user"></i></span> Admin</Link>
                                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                          <li><Link className="dropdown-item" to="/Profile">Profile</Link></li>
                                          <li><Link className="dropdown-item" to="/Logout">Logout</Link></li>
                                      </ul>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </header>
  )
}

export default Header