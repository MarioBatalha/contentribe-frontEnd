import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function SignUp() {
    return(
        <div className="page-sign-up">
          <h1>Contentribe</h1>

          <div className="card-sign-up">
             <div className="card-sign-up-body">
             <div>
                <span>Você quer contratar um freelancer?</span><br />
                <Link to="/register/company">Contrate um freelancer</Link>
              </div>

              <div>
                <span>Você quer trabalhar como freelancer?</span><br />
                <Link to="/register/freelancer">Trabalhe como freelancer</Link>
              </div>
             </div>

              <div className="card-sign-up-footer">
                <hr></hr>
                <span>Você já é cadastrado? </span>
                <Link to="logon">Entrar</Link>
              </div>
          </div>
        </div>
    )
    
}