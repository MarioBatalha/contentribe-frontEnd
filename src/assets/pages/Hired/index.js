import React from 'react';
import HeaderCompany from '../../components/HeaderCompany';
import MenuCompany from '../../components/MenuCompany';

import './style.css';

export default function Hired() {
    return (
        <div className="profile-container">
          <HeaderCompany />

            <div className="profile-container-body">
            <MenuCompany />
            </div>
            <h1>Lista de freelancer contratados</h1>
        </div>    
    );
}