import React from 'react';
import { FaPlus } from 'react-icons/fa';

import './style.css';

export default function ButtonAddTask() {
    return (
        <div className="task-menu">
          <Link to="/new/request" className="button-add">
              <FaPlus size={20} color="#F29D35" />
              Adicionar uma tarefa
          </Link>
         </div>  
    )
}