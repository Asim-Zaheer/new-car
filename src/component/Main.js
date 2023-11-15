import React from 'react'
import { NavLink } from 'react-router-dom'

function Main() {
  return (
  <>
   <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
                <div className="mobile-logo-wrap">
                    <NavLink to="index.html"><img alt="image" src="assets/img/logo.svg"/></NavLink>
                </div>
            </div>

            <ul className="menu-list">

                <li>
                    <NavLink to="/">Home</NavLink>

                </li>
                <li>
                    <NavLink to="/Reservation" className="drop-down">Reservations</NavLink>

                </li>
                <li>
                    <NavLink to="/Guide" className="drop-down">Vehicle Guide</NavLink>

                </li>
                <li>
                    <NavLink to="/Extra" className="drop-down">Price</NavLink>

                </li>
                <li>
                    <NavLink to="/Cookie" className="drop-down">Terms & Conditions</NavLink>

                </li>
                
                <li>
                    <NavLink to="/Contact" className="drop-down">CONTACT US</NavLink>
                </li>
            </ul>
            <div className="topbar-right d-lg-none d-block">

            </div>
  </>
  )
}

export default Main