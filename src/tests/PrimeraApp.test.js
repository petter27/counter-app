import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en componente Primera App', ()=>{

  test('El saludo debe ser "Hola soy Goku"', ()=>{

    const saludo = 'Hola soy goku';

    // Producto renderizado del componente que se quiere mostrar.
    const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText(saludo) ).toBeInTheDocument();
  });

});