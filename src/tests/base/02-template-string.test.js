import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.js', ()=> {

  test('Prueba en el metodo getsaludo, debe retornar Hola Pedro', () => { 

    const nombre = 'Pedro';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe('Hola ' + nombre );
  });

  test('El Metodo get saludo debe de retornar Hola Osvaldo sino recibe un parametro',()=>{
    
    const saludo = getSaludo();

    expect( saludo ).toBe('Hola Osvaldo');

  });

});