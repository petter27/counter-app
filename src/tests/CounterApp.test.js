import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas para el componente CounterApp', ()=>{

  let wrapper = shallow(<CounterApp />);// escope global y usado en multiples pruebas
  // se duplica el wrapper para no perder el intellisense del editor de codigo (no es buena practica pero es muy util)
  // esta funcion se ejecuta antes de correo cada una de las pruebas y nos permite reiniciar componentes, etc.
  beforeEach(()=>{
    wrapper = shallow(<CounterApp />); 
  });

  test('Debe de mostrar el componente CounterApp correctamente', ()=>{

    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe mostrar el valor de 100 enviado como valor por default', ()=>{

    const valor = 100;

    const wrapper = shallow(<CounterApp value={ valor } />);

    expect(valor).toBe( parseInt(wrapper.find('h2').text().trim()));

  });

  test('Debe de incrementar con el boton +1', ()=>{

    /*
    const btn1 = wrapper.find('button').at(0);
    console.log(btn1.html()); */
    wrapper.find('button').at(0).simulate('click');
    // debe ser 11 ya que el valor por defecto esta en 10
    expect(11).toBe( parseInt(wrapper.find('h2').text().trim()));

  });

  // las pruebas son ejecutadas una despues de las otras por eso no funciona disminuir en uno para el boton -1

  test('Debe de disminuir con el boton -1', ()=>{

    /*
    const btn1 = wrapper.find('button').at(0);
    console.log(btn1.html()); */
    wrapper.find('button').at(2).simulate('click');
    // debe ser 11 ya que el valor por defecto esta en 10
    expect(9).toBe( parseInt(wrapper.find('h2').text().trim()));

  });

});