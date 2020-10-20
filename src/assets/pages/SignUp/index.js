import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function SignUp() {
    return(
        <div className="page-sign-up">
        <div className="logo-sign-up">
            <h1>Contentribe</h1>
        </div>
          <div className="buttons-container">
          <span>Você quer contratar um freelancer</span>
            <Link to="/register/company" className="get-started">
            Contrate um freelancer
            </Link>

            <span>Você quer trabalhar como freelancer</span>
            <Link to="/register/freelancer" className="project">
            Trabalhar como freelancer
            </Link>
          </div>
        </div>
    )
    
}