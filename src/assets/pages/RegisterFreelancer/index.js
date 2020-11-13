import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import { FcGoogle } from 'react-icons/fc';

import api from '../../../services/api';
import './style.css';


export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [degree, setDegree] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const history = useHistory();

  async function handleRegisterFreelancer(e) {
    e.preventDefault();

    try {
      
      const data = {
        firstName,
        nickName,
        email,
        password,
        checkPassword,
        degree,
        country,
        phone,
      }
      await api.post('/freelancer', data);

      alert(`Agora é um profissional contentribe, aguarde a confirmação por email para aceder ao seu perfil.`);

     history.push('/'); 
    } catch (err) {
      alert('Erro ao cadastrar freelancer, tente novamente')
    }
  }
  
    return(
        <div className="register-container">
          <div className="content">
            <section>
                <h1>Contentribe</h1>
                <h1>Configure a sua conta <br />
                freelancer.</h1>
                <p>Seja um freelancer contentribe e receba as melhores propostas.</p>
                <p>Seja um profissional contentribe trabalhando connosco.</p>
           

                <Link className="back-link" to="/logon">
                  <FiArrowLeft  size={16} color="#6920B0" />
                  Voltar para o login
                </Link>
            </section>

            <form onSubmit={handleRegisterFreelancer}>

            <div className="social-midia">
            <Link className="gmail" to="/email/confirmation">
              <FcGoogle  className="IconGoogle" />
              Continuar com uma conta google 
            </Link>
            </div>
            
            <p> Ou </p>
              <input placeholder="Nome"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
              />

              <input placeholder="Sobrenome"
              value={nickName}
              onChange={e => setNickName(e.target.value)}
              required
              />


              <input placeholder="Email" type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              />

              <input placeholder="Palavra-passe" type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              />

              <input placeholder="confirme a sua palavra-passe" type="password"
              value={checkPassword}
              onChange={e => setCheckPassword(e.target.value)}
              required
              />

              <input placeholder="Príncipal habilidade" 
              value={degree}
              onChange={e => setDegree(e.target.value)}
              required
              />

              <input placeholder="País" 
              value={country}
              onChange={e => setCountry(e.target.value)}
              required
              />

              <input placeholder="Telemóvel"
              type="tel"  
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              />

              <div className="accords">
                <input type="checkbox" required></input>
                <p className="term">Ao se cadastrar, eu aceito os <a href="#termos">Termos de serviço</a>, <a href="#acordo">Acordo de Usuário</a> e 
                  as <a href="#Privacidade">Políticas de Privacidade</a> da CONTENTRIBE
                </p>
              </div>

              <button className="button" type="submit">Finalizar cadastro</button>
            </form>
          </div>
        </div>
    )
}