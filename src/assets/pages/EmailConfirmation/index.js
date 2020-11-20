import React from 'react';
import { Link } from 'react-router-dom';

import emailNotification from '../../image/emailNotification.png';
import './style.css';

export default function ProfileConfirmation() {

 
    return (
        <div className="profile-container">

          <div>
            <img src={emailNotification} alt="confirmação de email" className="emailNotification"/>
            <h1>Verifique o seu email para continuar</h1>
            <p>Acabamos de enviar um email para o endereço email@dominio.com</p>

            <p>Verfique o seu email e click no link fornecido para confirmar o seu endereço</p>
            <Link className="email-confirmation" to="#">Reenviar o email de confirmação</Link>
          </div>

        </div>
    )
}