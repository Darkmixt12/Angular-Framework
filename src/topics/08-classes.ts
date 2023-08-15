export class Person {
    public name: string;
    private address: string; // private significa que solamente en esta clase podremos usar address

    constructor() {
            this.name = 'Fernando';
            this.address = 'New York';
    }
}//? forma corta de definir clases en typescript 

export class Person2 {
    constructor(
        public name: string,
        private address: string = 'No address' // podemos darle un valor por defecto
    ){}
}


//! EXTENDS DE UNA CLASE //

//export class Hero extends Person2{  
    
    
   // constructor(
     //   public alterEgo: string,
       // public age: number,
        //public realName: string,
    //){
    //    super(realName, 'New York') // es el contructor del padre
    //}
//}

//! COMPOSICION POR ENCIMA DE EXTEND //


export class    Hero {
    
    
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person2
    ){

    }
}

const tony  = new Person2('Batman','Gothic')
const ironman = new Hero('Iron Man', 30, 'Tony', tony);

console.log(ironman)