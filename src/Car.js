import React from "react";
import "./style.css";

export default function Car(props) {
  const estiloDiv = {
    backgroundColor: "cyan",
    fontFamily: "Sans-serif"
 };
 const estiloH2 = {
    Color: "Purple"
};
  return (
  
    <div style= {estiloDiv}>{/* esto es un comentario*/}
      <h2 style= {estiloH2}>im car modelo: {props.marca}</h2>
      
      <img src={props.imagen}  alt= "Imagen carro" width="400"/>

      <p>{props.Descripcion}</p>
    </div>
  );
}
