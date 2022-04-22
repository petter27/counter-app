import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas para el componente CounterApp', ()=>{

  test('Debe de mostrar el componente CounterApp correctamente', ()=>{

    const wrapper = shallow(<CounterApp />);

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar el valor de 100 enviado como valor por default', ()=>{

    const valor = 100;

    const wrapper = shallow(<CounterApp value={ valor } />);

    expect(valor).toBe( parseInt(wrapper.find('h2').text().trim()));

  });

});