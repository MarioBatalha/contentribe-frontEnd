import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiBell, FiPower } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import './style.css';

export default function HeaderFreelancer() {
  const history = useHistory();

  const freelancerUserName = localStorage.getItem('freelancerUserName');

  function handleLogout() {
   localStorage.clear();

   history.push('/')
  }
  return (
    <div className="menu-container">
      <header>
        <h1>Contentribe</h1>
        <span>Bem-vindo, {freelancerUserName}</span>
        
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