import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FiBell, 
         FiUsers,
         FiLayers,
         FiClipboard,
         FiPrinter,
         FiPower
} from 'react-icons/fi';

import LogoImg from '../../image/logo.png';
import './style.css';

export default function MenuCompany() {
  const history = useHistory();

  const companyUserName = localStorage.getItem('companyUserName');

  function handleLogout() {
   localStorage.clear();

   history.push('/')
  }

    return(
       <div className="menu-container">
          <header>
          <img src={LogoImg} alt="Contentribe" />
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

        <div className="profile-container-body">
          <div className="profile-option">
            <ul>
              <li>
                <Link to="/company/profile">
                  <FiLayers size={20} color="#F29D35" />
                  Tarefas
                </Link>
              </li>
              <li>
                <Link to="/notFound">
                  <FiClipboard size={20} color="#F29D35" />
                  Contratados
                </Link>
              </li>
              <li>
                <Link to="/notFound">
                  <FiUsers size={20} color="#F29D35" />
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="/notFound">
                  <FiPrinter size={20} color="#F29D35" />
                  Gerar relatório
                </Link>
              </li>
            </ul>
          </div>
        </div>

       </div>
    )
}