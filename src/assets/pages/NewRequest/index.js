import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../../services/api';
import LogoImg from '../../image/logo.png';
import './style.css';

export default function Profile() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [lifetime, setLifetime] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [createAt, setCreateAt] = useState('');

  const history = useHistory();

  const companyId = localStorage.getItem('companyId');

  async function handleNewRequest(e) {
    e.preventDefault();

    try {
      const data = {
        title,
        category,
        lifetime,
        status,
        description,
        createAt,
      }
      await api.post('request', data, {
        headers: {
          Authorization: companyId,
        }
      })

      alert('Acabaste de fazer a requisição de uma tarefa. Aguarde confirmação por email')
     history.push('/company/profile'); 
    } catch (err) {
      alert('Erro ao requisitar tarefa,  verifique os campos e tente novamente')
    }
  }
  
    return (
        <div className="new-incident-container">
          <div className="content">
            <section>
                <h1>Contentribe</h1>
                <h1>Requisitar produção de contéudo</h1>
                <p className="description">Descreva o tipo de profissional que deseja a sua tarefa específicamente</p>
           
                <Link className="back-link" to="/task">
                  <FiArrowLeft  size={16} color="#6920B0" />
                Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewRequest}>
              <input placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
              />

              <input placeholder="Categória"
              value={category}
              onChange={e => setCategory(e.target.value)}
              />

              <input placeholder="Duração" 
              value={lifetime}
              onChange={e => setLifetime(e.target.value)}
              />

              <input placeholder="Estado"
              value={status}
              onChange={e => setStatus(e.target.value)}
              />

              <textarea placeholder="Descrição do trabalho" 
              value={description}
              onChange={e => setDescription(e.target.value)}
              />

              <input placeholder="Data"
              type="date"
              value={createAt}
              onChange={e => setCreateAt(e.target.value)}
              />

              <button className="button" type="submit">Concluir o pedido</button>
            </form>
          </div>
        </div>
    )
}