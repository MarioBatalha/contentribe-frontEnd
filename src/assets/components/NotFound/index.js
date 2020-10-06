import React from 'react';

import './style.css';
import NotFoundImg from '../../image/404.png';

export default function notFound() {
    return( 
        <div className="notfound-page">
            <img src={NotFoundImg} alt="Página não encontrada"  className="notfound-img" />
            <h1 className="notfound-title">Página não encontrada</h1>
            <p>Desculpa, a página que está requesitando não está disponível no momento :/</p>
        </div>
    )
}