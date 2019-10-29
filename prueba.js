var angel = {
    nombre: 'Angel',
    apellido: 'Sulbaran',
    altura: 1.70,
    cantidadDeLibros: 90
}

var pepe = {
    nombre: 'Pepe',
    apellido: 'Trueno',
    altura: 1.90,
    cantidadDeLibros: 12
}

var tom = {
    nombre: 'Tom',
    apellido: 'Holland',
    altura: 1.73,
    cantidadDeLibros: 22
}

var marco = {
    nombre: 'Marco',
    apellido: 'Polo',
    altura: 1.75,
    cantidadDeLibros: 111
}
var emma = {
    nombre: 'Emma',
    apellido: 'Stone',
    altura: 1.88,
    cantidadDeLibros: 9
}

var robert = {
    nombre: 'Robert',
    apellido: 'Downey Jr.',
    altura: 1.74,
    cantidadDeLibros: 9
}

const esAlta = ({altura}) => altura > 1.8;

var personas = [angel, pepe, tom, marco, emma, robert]

//console.log(personas);

var personasAltas = personas.filter(esAlta); 

/*var personasAltas = personas.filter(function (persona){
    return persona.altura>1.8;
}); */

/*const pasarAlturaACms = persona => ({
        ...persona,
        altura: persona.altura * 100
});*/

//var personasCms = personas.map(pasarAlturaACms);

/*var acum=0;
for(i=0; i<personas.length; i++)
{
    acum += personas[i].cantidadDeLibros;
}*/

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;


var totalDeLibros = personas.reduce(reducer,0);

console.log(`en total todos tienen ${totalDeLibros} Libros`);


