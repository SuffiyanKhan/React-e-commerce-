import React, { useState } from 'react'
import logo from '../images/logo.png'
import { useGlobalState } from '../../Context/Context'
import Navigation from '../Navigation/Navigation';


function AppNavbar() {
    const { setGetInputSearch } = useGlobalState();
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-primary-subtle">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={logo} className='img-fluid' style={{height : '60px'}} alt="" /> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control  ms-auto"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => {setGetInputSearch(e.target.value)}}
                />
              </form>
            </div>
          </div>
        </nav>
        <Navigation/>
    </>
  )
}

export default AppNavbar