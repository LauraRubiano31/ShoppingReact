import axios from 'axios'
import React from 'react'
import img from '../img/img.jpg'

const PersonasDetalle = (  {  personita }  ) => {

   
    return(
        <div className="row" >
              <div class="col s12 m10">
    
    <div class="row">
        <div class="col s12">
          <div class="card">
            <div class="card-image">
              <img src={img} />
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
            <span>Nombre del cliente: {personita.nombre_cliente }  </span>
                        <p>Tipo prenda: { personita.tipo_prenda  }</p>
                        <p>Cantidad: { personita.cantidad  }</p>
                        <p>Marca: { personita.marca}</p>
                        <p>Numero del cliente: { personita.numero_cliente }</p>
            </div>
            <div class="card-action">
              <p>Detalle del producto</p>
            </div>
          </div>
        </div>
        </div>
  </div>
      </div>
    )
}

export default PersonasDetalle
