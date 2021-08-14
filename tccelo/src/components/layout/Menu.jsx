import React from 'react';
import './Menu.css';

export default (props) => {
  return (
    <div className="menu">
    <nav>
        <a class="logo" href="/">elo</a>
        <ul>
            
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Planos</a>
            </li>
            <li>
                <a href="#">Sobre</a>
            </li>
            <li>
                <a href="#">Suporte</a>
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