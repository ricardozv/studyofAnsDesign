import React from 'react';
import './Rank.css';


export default function Rank() {
    return(
        <div className="login-container">
            <form>
            <img src={logo} alt = "Tindev" />
            <input 
            placeholder = "Digite seu nick do github"/>

            <button type="submit"> enviar</button>
            </form>
        </div>  
    );
}