import React from "react";
import "../style-sheet/integrantes.css"

function Integrantes(props){
  return(
    <div className="contenedor-integrantes">
      <img className="imagen-integrantes"
      src={require(`../imagenes/integrante-${props.imagen}.${props.formato}`)}
      alt={`${props.alt}`}/>
      <div className="contenedor-texto-integrante">
        <p className="nombre-integrante"><strong>{props.nombre}</strong></p>
        <p className="rol-integrante">{props.rol}</p>
        <p className="texto-integrante">{props.texto}</p>
      </div>
    </div>
  );
}


export default Integrantes;