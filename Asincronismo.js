const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true};



function obtenerPersonaje(id){
    return new Promise((resolve, reject) =>{
        const url =  `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.get(url, opts,function(data){
            resolve(data)
        })
        .fail(() => {id})
    });    
}

function onError(id){
    console.log(`Sucedio un error al obtener el personale ${id}`);
}

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
  try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  }catch(id){
    onError(id)
  }

   /* Promise
    .all(promesas)
    .then(personajes=> console.log(personajes))
    .catch(onError);*/
}

obtenerPersonajes()
/*
obtenerPersonaje(1)
.then( (personaje1)=>{
    console.log(`El presonaje 1 es ${personaje1.name}`)
    return obtenerPersonaje(2)
})
.then(personaje2 =>{
    console.log(`El presonaje 2 es ${personaje2.name}`)
    return obtenerPersonaje(3)
})
.then(personaje3 =>{
    console.log(`El presonaje 3 es ${personaje3.name}`)
    return obtenerPersonaje(4)
})
.then(personaje4=>{
    console.log(`El presonaje 4 es ${personaje4.name}`)
    return obtenerPersonaje(5)
})
.then(personaje5 =>{
    console.log(`El presonaje 5 es ${personaje5.name}`)    
})
.catch(onError)

*/