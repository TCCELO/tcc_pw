import React from 'react';
import './MenuAbout.css';
import { Link, NavLink} from 'react-router-dom'

export default (props) => {
  return (
    <div className="menuAbout">
    <nav>
        <ul>
            
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Planos">Planos</NavLink>
            </li>
            <li>
                <NavLink to="/Sobre" id="active">Sobre</NavLink>
            </li>
            <li>
                <NavLink to="/Suporte">Suporte</NavLink>
            </li>
        </ul>    
    </nav>
  </div>
  )
};