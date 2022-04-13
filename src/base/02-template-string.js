


const nombre   = 'Pedro';
const apellido = 'Pacheco';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );


export function getSaludo(nombre = 'Osvaldo') {
    return 'Hola ' + nombre;
}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );