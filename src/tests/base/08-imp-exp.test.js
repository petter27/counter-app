import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes',()=>{

  test('Debe de retornar un Heroes', ()=>{
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find( item => item.id === id);

    expect( heroe ).toEqual( heroeData );
  });

  test('Debe retornar undefined si el heroe no existe', ()=>{
    
    const id = 192;
    const heroe = getHeroeById(id);

    expect( heroe ).toBe( undefined );
  });


  test('Debe retornar los heroes de DC', ()=>{
    
    const owner = 'DC';
    const heroesTest = getHeroesByOwner( owner );

    const heroesData = heroes.filter( item => item.owner === owner );

    expect( heroesTest ).toEqual( heroesData );
  });

  test('Debe retornar un arreglo con length igual 2 porque solo hay dos heroes Marvel', ()=>{
    const owner = 'Marvel';
    const heroesTest = getHeroesByOwner(owner);

    expect( heroesTest.length ).toBe( 2 );
  });

});