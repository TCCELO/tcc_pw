import React from 'react';
import './LeadTwo.css';
import athleticmanstretching from '../../athleticmanstretching.jpg';

export default () => {
  return (
    <div className="leadTwo">
        <table>
            <tr id="leadTwoContent">
                <td id="imageLeadTwo">
                  <img src={athleticmanstretching} alt="AthleticMen"/> 
                </td> 
                <td id="descriptionLeadTwo">
                    <p id="titleLead">Funcionalidades</p>
                    <p id="subtitleLead">O funcionamento do aplicativo inclui a possibilidade dos
                                         usuários terem acesso a criação de um perfil, onde serão
                                         inseridas informações relativas aos esportes e atividades
                                         físicas de seu interesse, a localidade que se encontram e
                                         uma descrição pessoal. Esses dados serão utilizados como 
                                         uma maneira de filtrar os outros usuários que são 
                                         compatíveis em relação aos seus interesses no âmbito 
                                         esportivo e que estão em uma localidade próxima.
                    </p>
                </td>   
            </tr>
        </table>
    </div>
  );
}  