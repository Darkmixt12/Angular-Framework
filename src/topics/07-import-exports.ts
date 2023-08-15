import {Product, TaxCalculationOptions, } from './06-function-destructuring'
import {taxCalculation} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
      description: 'Nokia',
      price: 100   
    },
    {
        description: 'iPad',
        price:150
    }
];

// TAX = 0.15
const [total, tax] = taxCalculation({products: shoppingCart, tax: 0.15});

console.log('Total', total);
console.log('Tax', tax)