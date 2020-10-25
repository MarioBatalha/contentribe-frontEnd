import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../../services/api';
import './style.css';

export default function Profile() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [degree, setDegree] = useState('');
  const [residence, setResidence] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  async function handleNewFreelancer(e) {
    e.preventDefault();

    try {
      
      const data = {
        username,
        email,
        password,
        checkPassword,
        degree,
        residence,
        phone,
      }
      await api.post('freelancer', data)

     history.push('/profile'); 
    } catch (err) {
      alert('Erro ao cadastrar freelancer, tente novamente')
    }
  }
  
    return (
        <div className="new-incident-container">
          <div className="content">
            <section>
                <h1>Contentribe</h1>
                <h1>Cadastrar um profissional</h1>
                <p className="description"> Registre-se e faça parte da contentribe</p>
           
                <Link className="back-link" to="/">
                  <FiArrowLeft  size={16} color="#6920B0;" />
                Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewFreelancer}>
              <input placeholder="Nome completo"
              value={username}
              onChange={e => setUserName(e.target.value)}
              />


              <input placeholder="Email" type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />

              <input placeholder="Palavra-passe" type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />

              <input placeholder="confirme a sua palavra-passe" type="password"
              value={checkPassword}
              onChange={e => setCheckPassword(e.target.value)}
              />

              <input placeholder="Nível académico" 
              value={degree}
              onChange={e => setDegree(e.target.value)}
              />

              <input placeholder="Morada" 
              value={residence}
              onChange={e => setResidence(e.target.value)}
              />

              <input placeholder="Telemóvel"
              type="tel"  
              value={phone}
              onChange={e => setPhone(e.target.value)}
              />

              <button className="button" type="submit">Cadastrar um novo profissional</button>
            </form>
          </div>
        </div>
    )
}