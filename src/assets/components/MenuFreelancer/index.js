import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiBook, FiBookmark, FiLayers } from 'react-icons/fi';

import './style.css';

export default function MenuFreelancer() {

    return(
       <div>
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