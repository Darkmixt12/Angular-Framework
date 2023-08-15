interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Redmi 9A',
    price: 100,
}

const tablet: Product = {
    description: 'iPad Air',
    price: 160,
}
interface TaxCalculationOptions{
    tax: number;
    products: Product[];

}

// DESTRUCTURACION TAREA //


function taxCalculation( options: TaxCalculationOptions):[number, number] { 
    const {tax, products} = options;
    let total = 0;

    products.forEach( ({price}) => {
        total += price
    });

    return [total, total * tax]
}



const shoopingCart = [phone, tablet];
const tax = 0.15;

const [total1, taxResult] = taxCalculation({
    products: shoopingCart,
    tax
});



console.log('Total',  total1)
console.log('Total', taxResult)























export{}