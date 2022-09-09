function sum (num1,num2){
    return num1+num2;
}

function calc(num1,num2,callback) {
    return callback(num1,num2);

}//No necesariamente se debe llamar callback

console.log(calc(8, 2, sum)); 
//sum debe estar sin () y sin argumentos//

///////////////////////////// setTimeOut /////////////////////////////////////77
setTimeout (function(){
    console.log('hola JavaScript asincrono');
},2000)//2000 = a dos segundos 
//settimeout es un callback al recibir una funcion y otros paramatros 
//settimeout(function,time) 

/////////////////////////////////////////////////////////////////////////////////
function gretting(name){
    console.log(`hola ${name}`);
}
setTimeout (gretting,2000,'oscar');