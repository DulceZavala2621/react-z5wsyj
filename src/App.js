import React from "react";
import "./style.css";
import Car from "./Car.js"

export default function App() {

  return (
    <div >{/* esto es un comentario*/}
      <h1 >Hello StackBlitz!</h1>
      <p>Aqui va la descripcion del carro :)</p>
      <Car marca = "Corvette C6" imagen="https://static.retail.autofact.cl/blog/c_img_740x370.s12ttab8kzre30dn.jpg"
      Descripcion ="rojo y rapido"/>
      <Car marca = "Chevrolet L-170"imagen="https://i.pinimg.com/474x/91/2e/d4/912ed4ffcee5c4e018f7ad412cfac861.jpg"
      Descripcion ="Viejo y amable"/>
      <Car/>
    </div>
  );
}
