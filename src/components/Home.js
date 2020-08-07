import React from 'react';
import './App.css';


function Home() {

  return (
    <React.Fragment>
        <div className="container-fluid" id='base'>
            <div className='row'>
                <div className='col-2'>

                </div>
                <div className='col-8' >
                INFO  TAMBIEN PODEMOS UTILIZAR EL NavLink, SON EXACTAMENTE
            IGUALES PERO QUE DIFERENCIA TIENE QUE CUANDO ES 
            SELECCIONADA POR DEFECTO SE LE AGREGA UNA CLASE 
            Active AUTOMATICAMENTE, DE ESTA FORMA DESDE EL 
            CSS PUEDO JUGAR CON DICHA CLASE
                </div>
                <div className='col-2'>
                    
                </div>
            </div>
        </div>
    </React.Fragment>
    
  );
}

export default Home;
