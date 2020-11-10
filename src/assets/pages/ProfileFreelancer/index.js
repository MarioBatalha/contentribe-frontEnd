import React from 'react';
import HeaderFreelancer from '../../components/HeaderFreelancer';
import MenuFreelancer from '../../components/MenuFreelancer';
import './style.css';

export default function ProfileFreelancer() {

    return (
        <div className="profile-container">
          <HeaderFreelancer />

        <div className="profile-container-body">

            <MenuFreelancer />

        </div>
      </div>
    )
}