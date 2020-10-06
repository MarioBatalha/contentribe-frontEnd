import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import { FcGoogle } from 'react-icons/fc';

import api from '../../../services/api';
import './style.css';

import LogoImg from '../../image/logo.png';

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [country, setCountry] = useState('');
  const [nif, setNif] = useState('');


  const history = useHistory();
  
  async function handleRegisterCompany(e) {
    e.preventDefault(); 

    try {

     const data = {
       username,
       email,
       password,
       checkPassword,
       country, 
       nif,
     }
      await api.post('company', data);

      alert(`Registro feito com sucesso, pode aceder ao seu perfil fazendo o login.`);

      history.push('/');
    } catch (error) {
      alert('Erro no Registro, tente novamente.');
    }
  }
    return(
        <div className="register-container">
          <div className="content">
            <section>
                <img src={LogoImg} alt="Contentribe" className="logoImg"/>
                <h1>Conclua a  configuração da <br />
                sua conta.</h1>
                <p>Só mais algumas informações e já está.</p>
                <p>Para uma melhor experiência comece a produzir contéudos  na contentribe </p>
                
           
                <Link className="back-link" to="/logon">
                  <FiArrowLeft  size={16} color="#6920B0" />
                Voltar para o login
                </Link>
            </section>

            <form onSubmit={handleRegisterCompany}>

            <div className="social-midia">
            <Link className="gmail" to="/email/confirmation">
            <FcGoogle  className="IconGoogle" />
            Continuar com uma conta google </Link>
            </div>

            <p> Ou </p>

              <input placeholder="Nome da empresa"
              value={username} 
              onChange={e => setUserName(e.target.value)}
              required
              />
              <input type="email" placeholder="E-mail" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              />
            
              <input type="password" placeholder="palavra-passe" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              />

              <input type="password" placeholder="confirme a palavra-passe" 
              value={checkPassword}
              onChange={e => setCheckPassword(e.target.value)}
              required
              />

              <input placeholder="País" 
              value={country}
              onChange={e => setCountry(e.target.value)}
              required
              />

              <input type="number" placeholder="NIF" 
              value={nif}
              onChange={e => setNif(e.target.value)}
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