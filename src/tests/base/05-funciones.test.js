import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas realizadas para el archivo funciones.test.js',()=>{

  test('Debe de retornar un objeto',()=>{

    const usuarioTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();
   
    expect(usuarioTest).toStrictEqual(user);

  });

  test('Debe de retornar un objeto con el nombre dado brindado como parametro',()=>{
    
    const nombre = 'Pedro';

    const userTest = {
      uid: 'ABC567',
      username: nombre
    }

    const user = getUsuarioActivo(nombre);
    
    expect(userTest).toEqual(user);

  });

});