// un decoirador no es nada mas que una funcion 
// estas funciones pueden adjuntarse a las clases en los metodos propiedades etc...
//  añaden propiedades extras a las clases

function classDecorator(
    constructor: any
){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override'  
    }
}
// clase, componente, directiva, modulo todo esto es para angular el decorador define estas clases.
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123' // definicion de la clase

    print(){
        console.log('Hola mundo')
    }
}


console.log( SuperClass );

const myClass = new SuperClass(); // instancia de la clase
console.log( myClass)

