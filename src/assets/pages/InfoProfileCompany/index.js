import React from 'react';

import HeaderCompany from '../../components/HeaderCompany';
import MenuCompany from '../../components/MenuCompany';

export default function InfoProfileCompany() {
    return (
        <div className="profile-container">
          <HeaderCompany />

            <div className="profile-container-body">
            <MenuCompany />
            </div>
            <h1>Informações pessoais</h1>
        </div>    
    );
}