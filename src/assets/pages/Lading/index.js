import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsersCog, FaPaintRoller, FaFileSignature, FaHandHoldingUsd, FaHeadset } from 'react-icons/fa';

import './style.css';
import '../../../global.css';

import logoImg from '../../image/logo.png';
import ladingImg from '../../image/fly.png';

function Lading() {
  return (
    <div>
    <div id="page-lading">
      <div className="container">
        <div className="logo-container">
          <img src={logoImg}
          className="logo-image"
          alt="Contentribe"
          />
        </div>  

        <h2>Um novo conceito de trabalho automatizado. <br /> 
        Contentribe, gestão de contéudo com eficiência </h2>

        <div className="buttons-container">
          <Link to="/register/company" className="get-started">
          Produzir contéudo
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
          <li>
            <Link to="/notFound" >
            Cadastrar
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

  <h4>Comece um projecto numa das categorias</h4>
  <div className="category">

  <div className="category-item">
    <FaHeadset size={40} color="#F29D35" />
    <label>Consultória</label>
  </div>

  <div className="category-item">
    <FaPaintRoller size={40} color="#F29D35" />
    <label>Design Gráfico</label>
  </div>

  <div className="category-item">
    <FaHandHoldingUsd size={40} color="#F29D35" />
    <label>Marketing Digital</label>
  </div>

  <div className="category-item">
    <FaUsersCog size={40} color="#F29D35" />
    <label>Tradução</label>
  </div>

  <div className="category-item">
    <FaFileSignature size={40} color="#F29D35" />
    <label>Redação</label>
  </div>
  </div>

  </div>
  )
}

export default Lading;