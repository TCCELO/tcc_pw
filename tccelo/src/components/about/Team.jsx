import React from 'react';
import './Team.css';
import Camily from '../../camily.jpg';
import Camila from '../../camila.jpg';
import Felipe from '../../felipe.jpg';

export default () => {
  return (
    <div className="team">
        <div className="teamTitle">
            <p>Conheça nosso time</p>
        </div>
        <table>
            <tr id="imgCreators">
                <td id="cfimg">
                    <img src={Camily} alt="Camily"/>   
                </td> 
                <td id="cmimg">
                    <img src={Camila} alt="Camila"/>   
                </td> 
                <td id="fqimg">
                    <img src={Felipe} alt="Felipe"/>   
                </td>
            </tr>
            <tr id="infoCreators">
                <td id="cfname">
                    <p id="name">Camily França</p>
                    <p id="office">Estudante</p>
                </td> 
                <td id="cmname">
                    <p id="name">Camila Moraes</p>
                    <p id="office">Estudante</p>
                </td> 
                <td id="fqname">
                    <p id="name">Felipe Queiroz</p>
                    <p id="office">Estudante</p>
                </td> 
            </tr>
        </table>
    </div>
  );
}  