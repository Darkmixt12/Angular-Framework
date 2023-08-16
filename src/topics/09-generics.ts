export function whatsMyType<T>(argument: T): T {
    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo')
const amINumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1,2,3,4,5,6,7])

console.log(amIString.split(''))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))

//  para poner tipos de datos a nuestras respuestas o para especificar explicitamente 
// que tipo de dato tiene que ser la respuesta o el retorno de una funcion