
function addNumbers(a: number, b: number){  // el valor : es lo que retorna esta function void significa NADA, normalente las function retornan un UNDEFINEND pero el void significa explicitamente que no retornan ABOSLUTAMENTE NADA 
    return a+b
}


const addNumberArrow = (a: number, b: number) => {  
    return a+b 
}

 
function multiply( fistnumber: number, secondNumber?: number, base: number = 2): number {
    return fistnumber * base;
}



const multiplyresult: number = multiply(5);
const result: number = addNumberArrow(1,2)  + addNumbers(5,3)




console.log({result}, {multiplyresult}) // usando el {} podemos pasarlo como un objeto si no como algo normal


////////////////// 


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}



const  healCharacter = (character: Character, amount: number) =>{
        character.hp += amount;
}


const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }

}

healCharacter(strider, 10);
healCharacter(strider, 60);

export {};
