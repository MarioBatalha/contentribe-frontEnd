import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiBell } from 'react-icons/fi';
import { MdPerson, 
  MdBusinessCenter,
  MdAssignmentInd,
  MdClass,
} from 'react-icons/md';

export default function MenuAdmin() {
  const history = useHistory();

  const companyName = localStorage.getItem('companyName');

  function handleLogout() {
   localStorage.clear();

   history.push('/')
  }

    return(
       <div>
          <header>
          <h1>Contentribe</h1>
          <span>Bem-vindo, {companyName}</span>
          
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
                  <MdPerson size={20} color="#F29D35" />
                  Perfil
                </Link>
              </li>
              <li>
                <Link to="">
                  <MdBusinessCenter size={20} color="#F29D35" />
                  Empresas
                </Link>
              </li>
              <li>
                <Link to="">
                  <MdAssignmentInd size={20} color="#F29D35" />
                  Freelancer
                </Link>
              </li>
              <li>
                <Link to="">
                  <MdClass size={20} color="#F29D35" />
                  Tarefas
                </Link>
              </li>
            </ul>
          </div>
        </div>

       </div>
    )
}