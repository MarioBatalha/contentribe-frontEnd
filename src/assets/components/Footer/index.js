import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap';

import './style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
          <section className="ft-main">
            <div className="ft-main-item">
              <h2 className="ft-title">Sobre nós</h2>
              <ul>
                <li><Link to="#">Serviços</Link></li>
                <li><Link to="#">Portfolio</Link></li>
                <li><Link to="#">Preços</Link></li>
                <li><Link to="#">Parceiros</Link></li>
                <li><Link to="#">Carreiras</Link></li>
              </ul>
            </div>
            <div className="ft-main-item">
              <h2 className="ft-title">Recursos</h2>
              <ul>
                <li><Link to="#">Docs</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">eBooks</Link></li>
                <li><Link to="#">Webinars</Link></li>
              </ul>
            </div>
            <div className="ft-main-item">
              <h2 className="ft-title">Contactos</h2>
              <ul>
                <li><Link to="#">Ajudas</Link></li>
                <li><Link to="#">Dicas de uso</Link></li>
                <li><Link to="#">Advertise</Link></li>
              </ul>
            </div>
          </section>
        
          <section className="ft-social">
            <ul className="ft-social-list">
              <li><Link to="#"><FaFacebook /></Link></li>
              <li><Link to="#"><FaInstagram /></Link></li>
              <li><Link to="#"><FaTwitter /></Link></li>
              <li><Link to="#"><FaLinkedin /></Link></li>
              <li><Link to="#"><FaYoutube /></Link></li>
            </ul>
          </section>
        
          <section className="ft-legal">
            <ul className="ft-legal-list">
              <li><Link to="#">Termos &amp; Condições</Link></li>
              <li><Link to="#">Politica de privacidade</Link></li>
              <li>&copy; 2020 Copyright Kuenda Digital</li>
            </ul>
          </section>
        </footer>
    )
}