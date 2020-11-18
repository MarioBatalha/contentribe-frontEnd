import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'; 
import work from '../../image/worked.png'
import pay from '../../image/pay.png';
import service from '../../image/service.png';
import Footer from '../../components/Footer';

import LogoImg from '../../image/logo.png'; 

export default function HowItWorks() {
    return (
        <div className="page-howItWorks">
          <div className="page-howItWorks-section">
            <div className="logo-container">
              <img src={LogoImg} alt="Contentribe"></img>
            </div>

            <div className="work">
               <div className="first">
                 <h2>Como funciona?</h2>
                 <p>Use o nosso formulário rápido e fácil para descrever em poucas palavras o projecto que você tem em mente. Quanto mais detalhado for o briefing, melhor a qualidade dos freelancers.</p>
                <Link to="/register/freelancer" className="first-button">Seja um profissional contentribe</Link>             
               </div>
              <div className="second">
                <img src={work} alt="works" />
              </div>
            </div>

            <div className="service">
              <div className="first">
              <h2>Os serviços que precisa, quando precisa!</h2>
                <p>Expanda as habilidades da sua equipa conforme necessário com uma elite de profissionais independentes espalhados pelo continente prontos para qualquer desafio.</p>
                <Link to="" >Comece agora</Link>
              </div>
              <div className="second">
                <img src={service} alt="works" />
              </div>
            </div>

            <div className="payment">
                <div className="first">
                  <img src={pay} alt="works" />
                </div>
              <div className="second">
                <h2>Autorize o pagamento somente no final do projecto.</h2>
                <p>Assim que selecionar um freelancer para o seu projecto deverá efectuar o pagamento, que fica retido em depósito. Ao final do projecto, clique em autorizar o pagamento e os fundos serão enviados para o freelancer dedicado ao projecto. 
                    Caso existam quaisquer problemas ou não esteja satisfeito com o desempenho do freelancer durante o projecto.</p>
              </div>
            </div>
            
          </div>

          <Footer />
        </div>
    )
}