import content from '../img/content.gif'

const Contenido = () =>{
    return(
        <div>
            
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={content} />
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4"><i class="material-icons right">Registra tus compras</i></span>
      <p>Elaborador por : <br/>
      Laura Rubiano - ADSI <br />
      2242758
      </p>

    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
        </div>
    )

}

export default Contenido