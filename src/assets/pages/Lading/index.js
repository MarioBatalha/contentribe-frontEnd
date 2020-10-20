import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import '../../../global.css';

import ladingImg from '../../image/fly.png';

function Lading() {
  return (
    <div>
    <div id="page-lading">
      <div className="container">
        <div className="logo-container">
          <h1>Contentribe</h1>
        </div>  

        <strong>Potencialize a sua equipa com os <br /> 
        melhores profissionais criativos.</strong>

        <h3>Encontre freelancers com segurança, administre todos os processos criativos e centralize toda a sua produção de conteúdo em um só lugar.</h3>

        <div className="buttons-container">
          <Link to="/register/company" className="get-started">
          Produzir contéudos
          </Link>

          <Link to="/register/freelancer" className="project">
          Trabalhar como freelancer
          </Link>
        </div>
    </div>

    <div className="page-lading-content">
      <nav>
        <ul>
          <li>
            <Link to="/notFound">
            Como funciona
            </Link>
          </li>
          <li>
            <Link to="/logon">
            Entrar
            </Link>
          </li>
          <li className="link-register">
            <Link to="/sign" >
            Cadastrar-se
            </Link>
          </li>
        </ul>
      </nav>

      <img src={ladingImg}
      className="lading-image"
      alt="um novo conceito de trabalho"
      />
    </div>
  </div>
  </div>
  )
}

export default Lading;