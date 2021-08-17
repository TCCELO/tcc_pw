import React from 'react';
import './Lead.css';
import AthleticManNInHoodie from '../../athleticmaninhoodie.jpg';

export default () => {
  return (
    <div className="lead">
        <table>
            <tr id="leadContent">
                <td id="descriptionLead">
                    <p>O Elo é um aplicativo onde pessoas com uma paixão em comum,
                       o esporte, têm a oportunidade de se reunir em uma plataforma
                       que integra os praticantes de determinada atividade ao local
                       para prática do esporte. Quantas vezes você já quis praticar
                       uma atividade, mas desistiu por não ter companhia, ou até
                       mesmo algum espaço adequado?</p>
                    <p>A criação do ELO tem como objetivo promover a prática de 
                       esportes e atividades físicas, além de integrar pessoas
                       e incentivar o contato social, principalmente no período 
                       decorrente da pandemia e do isolamento.</p>
                </td> 
                <td id="imageLead">
                    <img src={AthleticManNInHoodie} />    
                </td>   
            </tr>
        </table>
    </div>
  );
}  