// describe nos funciona como un agruprador de todas las pruebas realizadas, por ello debemos colocarlas adentro de esta misma.
describe('Pruebas en el archivo demo.test.js', ()=>{

  test('Los strings deben de ser iguales', ()=>{

    // 1. iniciacion
    const mensaje = 'Hola mundo';

    // 2. Estimulo 
    const mensaje2 = `Hola mundo`;

    // 3. Observar comportamiento
    expect(mensaje).toBe(mensaje2); // ===

  });

  test('Los arreglos no deben ser iguales', ()=>{
    
    const arreglo1 = ['Naranja', 'Amarillo', 'Morado'];
    const arreglo2 = ['Rojo', 'Azul', 'Verde'];

    expect(arreglo1).not.toEqual(expect.arrayContaining(arreglo2));

  });
});
