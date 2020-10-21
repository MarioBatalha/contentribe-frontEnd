import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'; 
import work from '../../image/worked.png'
import pay from '../../image/pay.png';
import service from '../../image/service.png';

export default function HowItWorks() {
    return (
        <div className="page-howItWorks">
          <div className="page-howItWorks-section">
          <h1>Contentribe</h1>

            <div className="work">
               <div className="first">
                 <h1>Como funciona?</h1>
                 <p>Use o nosso formulário rápido e fácil para descrever em poucas palavras o projecto que você tem em mente. Quanto mais detalhado for o briefing, melhor a qualidade dos freelancers.</p>
               </div>
              <div className="second">
                <img src={work} alt="works" />
              </div>
            </div>

            <div className="service">
              <div className="first">
              <h1>Os serviços que precisa, quando precisa!</h1>
                <p>Expanda as habilidades da sua equipa conforme necessário com uma elite de profissionais independentes espalhados pelo continente prontos para qualquer desafio.</p>
                <p>Empresas - de todos os tamanhos e segmentos - utilizam o Contentribe para a produção de conteúdos digitais das mais variadas categorias incluindo logotipos, identidade visual, merchandising, ilustração, banners, flyers, ebooks, narração, escrita e tradução, animação, web e app design.</p>
                <Link>Comece agora</Link>
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
                <h1>Autorize o pagamento somente no final do projecto.</h1>
                <p>Assim que selecionar um freelancer para o seu projecto deverá efectuar o pagamento, que fica retido em depósito. Ao final do projecto, clique em autorizar o pagamento e os fundos serão enviados para o freelancer dedicado ao projecto. 
                    Caso existam quaisquer problemas ou não esteja satisfeito com o desempenho do freelancer durante o projecto, a nossa equipa de suporte ao cliente o ajudará a resolver qualquer disputa - mantendo o seu dinheiro seguro, não importa o que aconteça.
                    A criação da conta e publicação de projectos é totalmente gratuita. Nós adicionamos uma taxa de 5% de processamento e administração de pagamentos, e uma taxa de serviço de 15% em todos os pagamentos</p>
              </div>
            </div>
            
          </div>
        </div>
    )
}