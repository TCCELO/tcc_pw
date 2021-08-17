import React from 'react';
import './MenuAbout.css';
import { Link, NavLink} from 'react-router-dom'

export default (props) => {
  return (
    <div className="menuAbout">
    <nav>
        <ul>
            
            <li>
                <NavLink activeStyle={{
                    textDecorationStyle: "solid",
                    textDecorationColor: "#FFB422",
                    textDecorationLine: "underline",
                }} exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{
                    textDecorationStyle: "solid",
                    textDecorationColor: "#FFB422",
                    textDecorationLine: "underline",
                }} to="/Planos">Planos</NavLink>
            </li>
            <li>
                <NavLink to="/Sobre" id="active">Sobre</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{
                    textDecorationStyle: "solid",
                    textDecorationColor: "#FFB422",
                    textDecorationLine: "underline",
                }} to="/Suporte">Suporte</NavLink>
            </li>
        </ul>    
    </nav>
  </div>
  )
};