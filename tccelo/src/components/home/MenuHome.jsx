import React from 'react';
import './MenuHome.css';
import { Link, NavLink} from 'react-router-dom'

export default (props) => {
  return (
    <div className="menu">
    <nav>
        <a class="logo" href="/">elo</a>
        <ul>
            
            <li>
                <NavLink activeStyle={{ color: 'white' }} id="activeHome" exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: 'white' }} to="/Planos">Planos</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: 'white' }} to="/Sobre">Sobre</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: 'white' }} to="/Suporte">Suporte</NavLink>
            </li>
        </ul>    
        <a class="login" href="#">Entrar</a>
        <a class="news" href="#">News</a>
        <div className="notifications">
            <a class="noti" href="#">2</a>
        </div>
        
    </nav>
  </div>
  )
};