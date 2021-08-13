import React from 'react';
import './TextBox.css';

export default () => {
  return (
    <div className="texts">
        <div className="homeHeadline">
            <table>
                <tr>
                    <td>Facilidade</td>
                </tr>
                <tr className="noFill">
                    <td>Versatilidade</td>
                </tr>
                <tr>
                    <td>Segurança</td>
                </tr>
            </table>
        </div>
        <div className="homeSubHeadline">
            Nunca falta algo ou alguém para o seu esporte <br/>
            deixe o Elo cuidar do aquecimento para você
        </div>
    </div>
  );
}  