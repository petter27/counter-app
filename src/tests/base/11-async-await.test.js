import { getImagen } from '../../base/11-async-await';

describe('Pruebas en el archivo de async-await y Fetch', ()=>{

test('Debe de retornar el url de la imagen', async()=>{
  const url = await getImagen();
    expect( url.includes('https://') ).toBe(true);
});

});