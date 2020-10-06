import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaCoins, FaClock } from 'react-icons/fa';

import MenuCompany from '../../components/MenuCompany';
import api from '../../../services/api';
import './style.css';

export default function Task() {
    const [request, setRequest] = useState([]);

    const companyId = localStorage.getItem('companyId');

    useEffect(() => {
        api.get('/profile', { 
          headers: {
            authorization: companyId,
          }
        }).then(res => {
          setRequest(res.data);
        })
      }, [companyId])
      
    return(
       <div className="task-container">
         <MenuCompany />

         <div className="task-card">
            <div className="task-card-header">
              <h2>Tradução do certificado de Habilitações Literárias</h2>
              <h3>categoria - Tradução  </h3>
              <h3> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
              <div className="task-detail">
                <label><FaCoins  color="#6920B0" /> Proposta: 60.000 AOA</label>
                <label><FaClock color="#6920B0" /> Duração: 15 dias úteis</label>
              </div>
            </div>
        </div> 

        <div className="task-menu">
          <Link to="/new/request" className="button-add">
              <FaPlus size={20} color="#F29D35" />
              Adicionar uma tarefa
          </Link>
         </div>  
        
      </div>
    )
} 