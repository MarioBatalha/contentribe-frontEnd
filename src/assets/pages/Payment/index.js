import React from 'react';
import HeaderCompany from '../../components/HeaderCompany';
import MenuCompany from '../../components/MenuCompany';

import './style.css';

export default function Payment() {
    return (
        <div className="profile-container">
          <HeaderCompany />

            <div className="profile-container-body">
            <MenuCompany />
            </div>
            <h1>Gerir pagamentos</h1>
        </div>    
    );
}