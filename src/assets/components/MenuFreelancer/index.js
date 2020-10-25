import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiBell, FiUser, FiUsers, FiBook, FiBookmark, FiLayers } from 'react-icons/fi';

import LogoImg from '../../image/logo.png';

export default function MenuFreelancer() {
  const history = useHistory();

  const ongName = localStorage.getItem('ongName');

  function handleLogout() {
   localStorage.clear();

   history.push('/')
  }

    return(
       <div>
          <header>
          <h1>Contentribe</h1>>
          <span>Bem-vindo, {ongName}</span>
          
          <div className="menu">
            <Link to="#" onClick={handleLogout} className="menu-item">
              <FiBell size={30} color="#F29D35" />
            </Link>
            <Link to="#" onClick={handleLogout} className="menu-item">
              <FiUser  size={30} color="#F29D35"/>
            </Link>
          </div>
        </header>

        <div className="profile-container-body">
          <div className="profile-option">
            <ul>
              <li>
                <Link to="">
                  <FiUsers size={20} color="#F29D35" />
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="">
                  <FiBook size={20} color="#F29D35" />
                  Educação
                </Link>
              </li>
              <li>
                <Link to="">
                  <FiBookmark size={20} color="#F29D35" />
                  Experiência
                </Link>
              </li>
              <li>
                <Link to="">
                  <FiLayers size={20} color="#F29D35" />
                  Tarefas
                </Link>
              </li>
            </ul>
          </div>
        </div>

       </div>
    )
}