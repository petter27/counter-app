import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ({saludo, subtitulo}) => {

  return ( 
    <>
      <h1>{ saludo }</h1> 
      <p>{ subtitulo }</p>
    </>
  );
}
// Esto es una forma de documentar y solicitar a otros desarrolladores que envien los props cuando utilicen el componente 
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
};

// esto lo que hace es crear los props o asignarles un valor por defecto cuando no se envia nada.
PrimeraApp.defaultProps = {
  saludo: '',
  subtitulo : 'Este es un proptype por default'
}
 
export default PrimeraApp;