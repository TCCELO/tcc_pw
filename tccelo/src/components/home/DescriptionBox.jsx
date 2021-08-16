import React from 'react';
import './DescriptionBox.css';

export default () => {
  return (
    <div className="descricao">
        <hr/>
        <table>
            <tr id="line1">
                <td id="column1">DISPONÍVEL EM</td>
                <td id="column1">A PARTIR DE</td>    
            </tr>
            <tr id="line2">
                <td>Android<br/>IOS</td>   
                <td>27/11/2021</td> 
            </tr>
        </table>
        <hr/>
    </div>
  );
}  