import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en componente Primera App', ()=>{
/*
  test('El saludo debe ser "Hola soy Goku"', ()=>{

    const saludo = 'Hola soy goku';

    // Producto renderizado del componente que se quiere mostrar.
    const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect( getByText(saludo) ).toBeInTheDocument();
  }); */
  test('Debe de mostrar <PrimeraApp/> Correctamente', ()=>{

    const saludo = 'Hola soy Goku';

    const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar el subtitulo enviado por props', ()=>{

    const saludo = 'Hola soy Goku';
    const subtitulo = 'Soy un subtitulo!!';

    const wrapper = shallow(
      <PrimeraApp 
        saludo={ saludo } 
        subtitulo={ subtitulo }
      />
    );

    const textoParrafo = wrapper.find('p').text();
    
    expect( textoParrafo ).toBe( subtitulo );

  });

});