import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import api from '../../../services/api';

import './style.css';
import Authentication from '../../image/authentication.png';


export default function Logon() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { username, password });

      localStorage.setItem('companyPassword', password);
      localStorage.setItem('companyUserName', response.data.username);

      history.push('/company/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.')
    }
  }
    return (
     <div className="logon-container">
       <section className="form">
       <h1>Contentribe</h1>

       <form onSubmit={handleLogin}>
           <h1>Vamos começar !</h1>

           <div className="social-midia">

              <Link className="gmail" to="/notFound">
              <FcGoogle  className="IconGoogle" />
              Continuar com uma conta google </Link>
           </div>

          <p> Ou </p>

           <input placeholder="Nome do usuário"
           value={username}
           onChange={e => setUserName(e.target.value)}
           required 
           /> 

            <input placeholder="palavra-passe" type="password"
           value={password}
           onChange={e => setPassword(e.target.value)}
           required
           />
           
           <button className="button">Entrar</button>
           <Link className="back-link" to="/notFound">
            <FiLogIn  size={16} color="#6920B0" />
            Esqueci a senha.
           </Link>
       </form>
       </section>
       
       <img src={Authentication} className="person" alt="person" />
     </div> 
    )
}