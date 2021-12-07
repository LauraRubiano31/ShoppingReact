import React from 'react'
import user from '../img/user.jpg'

const PersonasLista = (props) => {

    return(
            <ul className="collection ">{
                    props.listapersonas.map( ( elemento ) => {
                            return (  
                                    <li className="collection-item avatar" key={ elemento._id }>    
                                        <img src={user} alt="" class="circle" />
                                        <span class="title">{ elemento.nombre_cliente } </span>
                                        <p>{elemento.numero_cliente}<br />{elemento.tipo_prenda}</p>
                                        <a href="#!" className="secondary-content "><i class="material-icons "><box-icon name='info-circle' type='solid'onClick={ props.actualizarPersona.bind(this , elemento   ) } ></box-icon ></i><box-icon name='trash'
                                        onClick={ props.borrarCancion.bind(this,elemento)}
                                        ></box-icon></a>
                                    </li>
                            ) 
                    } )   

                }
                    

        </ul>
      
    )
}

export default PersonasLista
