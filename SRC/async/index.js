/////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
////https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const fnAsync = () =>{
    return new Promise((resolve,reject) => {
        (true)//se usó operador ternario y se está forzando con true que se cumpla la condición
            ? setTimeout (()=> resolve('async!!'),2000)
            : reject(new Error('error!'));//arroja "error" en caso de que la condición sea false
    });
}

const anotherFunction = async () =>{//la palabra async es para el cuerpo de la función
    //la palabra await estará dentro de la lógica a implementar
    const something = await fnAsync();//aquí nos está regresando una promesa
    console.log(something);//se imprime mientras se espera
    console.log('hello');
}

console.log('before'); //al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFunction();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('after');//aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

/*La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/

//// el codigo no se detiene a esperar a que se ejecute el anotherFunction 
//// se ejecuta todo y al pasar 2 segundos es que corre ese another function 