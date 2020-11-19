import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCoins, FaClock } from 'react-icons/fa';
import { FiPlus, FiSearch } from 'react-icons/fi';
import api from '../../../services/api';
import ProgressBar from '../../components/ProgressBar';

import './style.css';

export default function Task() {
    const [request, setRequest] = useState([]);
    const [textSearch, setTextSearch] = useState('');

    const companyUserName = localStorage.getItem('companyUserName');

    useEffect(() => {
        api.get('profile', { 
          headers: {
            Authorization: companyUserName,
          }
        }).then(res => {
          setRequest(res.data);
        })
      }, [companyUserName])
      
    return(
       <div className="task-container">
        <div className="filters__search">
						<input
							type="text"
							className="filters__search__input"
							placeholder="Pesquisar por tarefas"
							value={textSearch}
							onChange={e => setTextSearch(e.target.setTextSearch)}
						/>
						{/**Esse onClick causa waning no console mas pode ser retirado {/*onClicK={() => this.props.filterBy(this.state.textSearch)}*/}{' '}
						<button className="filters__search__icon">
							<FiSearch  size={30} />
						</button>
					</div>
          <h1 className="text-title">Suas tarefas</h1>
       {request.map(request => ( 
         <div className="task-card" key={request.id}>
            <div className="task-card-header">
              <h2>{request.title}</h2>
              <h3>categoria - {request.category}  </h3>
              <h3>{request.description}</h3>
              <div className="task-detail">
                <label><FaCoins  color="#F29D35" /> Orçamento: {request.budget}.000 AOA</label>
                <label><FaClock color="#F29D35" /> Prazo: {request.lifetime}</label>
              </div>
            </div>

            <hr />
            <div className="progress-container">
              <ProgressBar />
            </div>
        </div>  
        ))}
        
        <Link to="/new/request" className="create-task">
            <FiPlus size={32} color="#FFF" />
        </Link> 
      </div>
    )
} 