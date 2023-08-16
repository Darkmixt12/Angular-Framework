export interface Passenger {
    name: string;
    children?: string[];

}

const passenger1: Passenger = {
    name: "Steven"
}


const passenger2: Passenger = {
    name: "Tony",
    children: ['Natalia','Elizabeth']

}

const printChildren = (passenger : Passenger) => {
    const howManyCHildren = passenger.children?.length || 0 //! hay que saber diferenciar! entre ! o ?
    // const howManyChildren = passenger.children!.lenght; //! esto quiere decir que le decimos al typescript que confie en nosotros ya que siempre vamos a recibir un numero!

    console.log(passenger.name, howManyCHildren);
}

printChildren(passenger2);