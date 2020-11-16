import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import api from '../../../services/api';
import './style.css';

export default function Task() {
    const [request, setRequest] = useState([]);

    const companyUserName = localStorage.getItem('companyUserName');

    useEffect(() => {
        api.get('profile', { 
          headers: {
            Authorization: companyUserName,
          }
        }).then(res => {
          setRequest(res.data);
        })
      }, [companyId])
      
    return(
       <div className="task-container">
       {request.map(request => ( 
         <div className="task-card" key={request.id}>
            <div className="task-card-header">
              <h2>{request.title}</h2>
              <h3>categoria - {request.categgory}  </h3>
              <h3>{request.description}</h3>
              <div className="task-detail">
                <label><FaCalendar  color="#F29D35" /> Orçamento: {Intl('pt-BR', { style: 'currency', currency: 'AOA' }).format(request.budget)}</label>
                <label><FaClock color="#F29D35" /> Prazo:{request.lifetime}</label>
              </div>
            </div>
        </div>  
        ))}
        
        <Link to="/new/request" className="create-task">
            <FiPlus size={32} color="#FFF" />
        </Link> 
      </div>
    )
} 