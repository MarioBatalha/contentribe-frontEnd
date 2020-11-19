import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FiBell, 
         FiPower
} from 'react-icons/fi';

import LogoImg from '../../image/logo.png';
import './style.css';

export default function HeaderCompany() {
  
  const history = useHistory();

  const companyUserName = localStorage.getItem('companyUserName');

  function handleLogout() {
   localStorage.clear();

   history.push('/')
  }

    return(
       <div className="menu-container">
          <header>
          <div className="logo-container">
          <Link to="/company/profile">
              <img src={LogoImg} alt="Contentribe"></img>
          </Link>    
          </div>
            <span>Bem-vindo, {companyUserName}</span>
            
            <div className="menu">
              <Link to="#" onClick={handleLogout} className="menu-item">
                <FiPower  size={30} color="#F29D35"/>
              </Link>
              <Link to="#" className="menu-item">
                <FiBell size={30} color="#F29D35" />
              </Link>
              <Link to="#" className="menu-item">
                <FaUserCircle  size={30} color="#F29D35"/>
              </Link>
            </div>
          </header>
        </div>
    )
}