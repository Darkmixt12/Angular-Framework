const skills: string[] = ['Bash', 'Counter', 'Healing']
//? muy importante la declaracion de que tipo es el array para trabajar de una mejor manera! :D

//! como tipear objetos de manera extricta para ello debemos crear una interfaz

interface Character { //? las interfaces nos ayudan a definir como queremos que los objetos luzcan
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // si pongo ? puedo hacer que no sea necesario declarar esa parte del objeto obligatoriamente abajo :D
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash','Counter'],
    
}

strider.hometown = 'Rivendell'

console.table(strider) // table es una manera mas bonita de imprimir las cosas me gusta

export {} // ahora el archivo es un modulo!