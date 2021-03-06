import React from 'react'
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';
import Contenido  from './Personas/Contenido';
import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       personas : [],
       personaActual: {}
    }

    //vincular la funcion actualizarPErsona al objeto
    this.actualizarPersona = this.actualizarPersona.bind(this)
  }

  componentDidMount(){
      const url="http://localhost:5001/prenda"
      axios.get(url)
            .then( (respuesta)=> {   
                this.setState({
                      personas: respuesta.data
                })  
            })
            .catch( (error) => {console.log(error)}  )
  }

  //funcion para asignar personaActual
  actualizarPersona(persona) {
      this.setState({
          personaActual: persona
      })
  };

  borrarCancion({_id:id}){
   console.log(id);
   const url=`http://localhost:5001/prendas/${id}`;
      axios.delete(url)
      .then( (respuesta)=> {   
        this.setState({
              personas: respuesta.data
        })
        
    })
        .catch( (error) => {console.log(error)}  )
};
  



  render(){
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col s12">
              <nav>
                <div class="nav-wrapper purple lighten-2">
                <a href="#" class="brand-logo">CONTROL DE COMPRAS</a>
               
    </div>
  </nav>
              </div>
          </div>
          <div className="row">
              <div className="col s4">
                  <Contenido />
                  
              </div>
              <div className="col s4">
                <PersonasLista  
                            listapersonas={ this.state.personas } 
                            actualizarPersona = { this.actualizarPersona }
                            borrarCancion = {this.borrarCancion}

                  />
              </div>
              <div className="col s4">
                 <PersonasDetalle  personita={ this.state.personaActual }  />
              </div>
          </div>
          <div className="row">
              <div className="col s12">
                  <PersonasForm />
              </div>
          </div>
          
      </div>
    ); 
  }
}

export default App;
