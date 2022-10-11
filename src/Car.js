import React from "react";
import "./style.css";

export default function Car(props) {
  return (
    <div>
      <h1>im car modelo {props.marca}</h1>
      
      <img src={props.imagen} alt="Imagen del carro" width="400"/>

      <p>{props.Descripcion}</p>
    </div>
  );
}
