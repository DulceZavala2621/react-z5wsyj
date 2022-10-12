import React from "react";
import "./style.css";

export default function Car(props) {
  const estiloDivCard = {
    boxshadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
 };
 const estiloDivCard = {
  with: "100%",
};
 const estiloH2 = {
    color: "green"
};
const estiloH1 = {
  color: "red"
};
  return (
  
    <div style= {estiloDivCard}>{/* esto es un comentario*/}
      <h2 style= {estiloH2}>im car modelo: {props.marca}</h2>
      
      <img src={props.imagen}  alt= "Imagen carro" width="400"/>

      <p>{props.Descripcion}</p>
    </div>
  );
}
