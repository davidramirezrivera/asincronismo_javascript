//import { formDataToBlob } from "formdata-polyfill/esm.min";

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
function* gen (){
    yield 1;
    yield 2;
    yield 3;

}
const g =gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate (array){ // este es un generador vacio esperando que sean introduccidos elementos de un array
    for (let value of array){
        yield value
    }
}

const it = iterate(['oscar','nancy','silvia','juan']); // con este estamos creando un generador con valores 
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);