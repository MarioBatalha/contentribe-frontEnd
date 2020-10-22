import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap';

import './style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
          <section class="ft-main">
            <div class="ft-main-item">
              <h2 class="ft-title">Sobre nós</h2>
              <ul>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Preços</a></li>
                <li><a href="#">Parceiros</a></li>
                <li><a href="#">Carreiras</a></li>
              </ul>
            </div>
            <div class="ft-main-item">
              <h2 class="ft-title">Recursos</h2>
              <ul>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">eBooks</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            <div class="ft-main-item">
              <h2 class="ft-title">Contactos</h2>
              <ul>
                <li><a href="#">Ajudas</a></li>
                <li><a href="#">Dicas de uso</a></li>
                <li><a href="#">Advertise</a></li>
              </ul>
            </div>
          </section>
        
          <section class="ft-social">
            <ul class="ft-social-list">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaLinkedin /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </section>
        
          <section class="ft-legal">
            <ul class="ft-legal-list">
              <li><a href="#">Termos &amp; Condições</a></li>
              <li><a href="#">Politica de privacidade</a></li>
              <li>&copy; 2020 Copyright Kuenda Digital</li>
            </ul>
          </section>
        </footer>
    )
}