import React from 'react';
import HeaderCompany from '../../components/HeaderCompany';
import MenuCompany from '../../components/MenuCompany';
import Task from '../Task';

export default function ProfileCompany() {
   
    return (
      <div className="profile-container">
          <HeaderCompany />

        <div className="profile-container-body">
          <MenuCompany />

          <Task />
        </div>
      </div>
    )
}