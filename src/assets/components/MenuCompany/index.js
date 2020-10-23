import React from 'react';
import { Link } from 'react-router-dom';
import { FiLayers, FiClipboard, FiUsers, FiPrinter} from 'react-icons/fi';
import { GiMoneyStack } from 'react-icons/gi'

import './style.css';

export default function MenuCompany() {
    return (
        <div className="profile-container-menu">
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
                  <FiUsers size={20} color="#F29D35" />
                  Perfil
                </Link>
              </li>

              <li>
                <Link to="/company/hired">
                  <FiClipboard size={20} color="#F29D35" />
                  Contratados
                </Link>
              </li>
              
              <li>
                <Link to="/company/payment">
                  <GiMoneyStack size={20} color="#F29D35" />
                  Pagamentos
                </Link>
              </li>

              <li>
                <Link to="/company/report">
                  <FiPrinter size={20} color="#F29D35" />
                  Gerar relatório
                </Link>
              </li>

            </ul>
          </div>
        </div>  
    )
}
