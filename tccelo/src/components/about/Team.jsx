import React from 'react';
import './Team.css';

export default () => {
  return (
    <div className="team">
        <div className="teamTitle">
            <p>Conheça nosso time</p>
        </div>
        <table>
            <tr id="imgCreators">
                <td>
                    <img src="../../camily.jpg" alt="Camily"/>   
                </td> 
                <td>
                    <img src="../../camila.jpg" alt="Camila"/>   
                </td> 
                <td>
                    <img src="../../felipe.jpg" alt="Felipe"/>   
                </td>
            </tr>
            <tr id="infoCreators">
                <td>
                    <p id="name"></p>
                    <p id="office"></p>
                </td> 
                <td>
                    <p id="name"></p>
                    <p id="office"></p>
                </td> 
                <td>
                    <p id="name"></p>
                    <p id="office"></p>
                </td> 
            </tr>
        </table>
    </div>
  );
}  