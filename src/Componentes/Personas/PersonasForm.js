import React from 'react'
import axios from 'axios'

class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            
        }
    }


    //funcion para enviar request POST a endpoint
    submitNuevaPersona( event ){
        //anular comportamiento por defecto del form
        event.preventDefault()
        //peticion con axios
        axios.post('http://localhost:5001/prenda' , {
                                                           tipo_prenda: this.refs.tipo_prenda.value,
                                                           cantidad:  this.refs.cantidad.value,
                                                           marca:  this.refs.marca.value,
                                                           nombre_cliente:  this.refs.nombre_cliente.value,
                                                           numero_cliente:  this.refs.numero_cliente.value,
                                                       }
        ).then(  respuesta => console.log(respuesta.data))
         .catch( error => console.log(error)  )
    }

    render(){
       return(
        <div className="row">
            <h5 className="center"> Agregar prenda  </h5>  
            <form className="col s12" onSubmit={ this.submitNuevaPersona.bind(this) }>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="tipo_prenda" ref="tipo_prenda" type="text"  />
                        <label htmlFor="tipo_prenda">Tipo de prenda</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="cantidad" ref="cantidad" type="text" />
                        <label htmlFor="cantidad">Cantidad</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="marca" ref="marca" type="text" />
                        <label htmlFor="marca">Marca</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="nombre_cliente" ref="nombre_cliente" type="text" />
                        <label htmlFor="nombre_cliente">Nombre cliente</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="numero_cliente" ref="numero_cliente" type="text" />
                        <label htmlFor="numero_cliente">Número cliente</label>
                    </div>
                </div>
                <div className="row">
                 
                    <div className="input-field col s6">
                        <button type="submit" className="btn waves-effect purple lighten-3" name="action">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </div>
       )     
    }

}

export default PersonasForm