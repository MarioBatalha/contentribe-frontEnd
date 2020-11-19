import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../image/logo.png';
import api from '../../../services/api';
import './style.css';

export default function Profile() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [lifetime, setLifetime] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [promotionalCode, setPromotionalCode] = useState('');

  const history = useHistory();

  const companyUserName = localStorage.getItem('companyUserName');

  async function handleNewRequest(e) {
    e.preventDefault();

      const data = {
        title,
        category,
        lifetime,
        description,
        budget,
        promotionalCode,
      }
      
      try {
        await api.post('request', data, {
          headers: {
            Authorization: companyUserName,
          }
        }) 

        alert('Erro ao requisitar tarefa,  verifique os campos e tente novamente');
        history.push('/company/profile');

      } catch(errors){
      alert('Acabaste de fazer a requisição de uma tarefa')
    }
  }
  
    return (
        <div className="new-incident-container">
          <div className="content">
            <section>
            <div className="logo-container">
              <img src={LogoImg} alt="Contentribe"></img>
            </div>
                <h1>Requisitar produção de contéudo</h1>
                <p className="description">Descreva a sua tarefa detalhadamente</p>
           
                <Link className="back-link" to="/company/profile ">
                  <FiArrowLeft  size={16} color="#6920B0" />
                Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewRequest}>
              <input placeholder="Nome do projecto"
              value={title}
              onChange={e => setTitle(e.target.value)}
              />

              <input placeholder="Categória"
              value={category}
              onChange={e => setCategory(e.target.value)}
              />

              <input placeholder="Prazo" 
              value={lifetime}
              onChange={e => setLifetime(e.target.value)}
              />


              <textarea placeholder="Descrição do projecto" 
              value={description}
              onChange={e => setDescription(e.target.value)}
              />

              <input placeholder="Orçamento"
              type="number"
              value={budget}
              onChange={e => setBudget(e.target.value)}
              />

              <input placeholder="Inserir código promocional"
              value={promotionalCode}
              onChange={e => setPromotionalCode(e.target.value)}
              />

              <button className="button" type="submit">Submeter o pedido</button>
            </form>
          </div>
        </div>
    )
}