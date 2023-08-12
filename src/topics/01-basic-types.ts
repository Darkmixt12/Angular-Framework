const name: string = 'Visas Starfrost'
let hpPoints: number = 84;
let hpPoints2: number | 'FULL' = 95
const isAlive: boolean = true;



hpPoints2 = 'FULL' // esto es genial porque podemos asignarle dos tipos de dato a una variable y en este caso una palabra

console.log({
    name, hpPoints, hpPoints2, isAlive
}) //? por si solo este console log no mostrara nada porque hay que importar este file en el MAIN.TS primero 


































export{}; //! hace esto para evitar el error que sale creando este modulo //
