import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Login from './Login/Login'
import './Header.scss'
//import logo from '../../../assets/logo@1x.png'

const Header = () => {
    return(
        <header className="header-wrapper">  
            <div className="header-wrapper-box">
               <div className="nav-logo-box">
                 {/* <i><Link to="/"><img src={logo} alt="header-logo" /></Link></i> */}
               </div>
               <Navbar />
               <Search />
               <Login />
            </div>
        </header>
    )
}

export default Header