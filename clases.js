/*function heredaDe (prototipoHijo, prototipoPadre) {
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo
}*/

class Persona{
    constructor(nombre, apellido, altura){
        this.nombre=nombre;
        this.apellido=apellido        
        this.altura =altura
    }
    saludar(){
        console.log(`Hola,  me llamo ${this.nombre} ${this.apellido}`);
    }
    soyAlto(){
        return this.altura>1.80
    }
}



class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)        
    }
    saludar(){
        console.log(`Hola me llamo  ${this.nombre}  ${this.apellido} y soy desarrolador `)
    }
}




//var sasha = new Persona('sasha','lifsyc', 1.72)
//var erika = new Persona('Erika','Luna', 1.65)
//var arturo = new Persona('Arturo','Martinez', 1.89)
//sasha.saludar();