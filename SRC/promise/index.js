const promise = new Promise(function (resolve,reject){
    resolve ('heyy!!');

});

const cows = 4;

const countCows = new Promise((resolve, reject) => {
    if (cows>10){
        resolve(`we have ${cows} cows on the farm`);
    }else{
        reject("there is no cows on the farm");
    }
});

countCows.then((result) =>{
    console.log(result);
}) .catch((error)=>{
    console.log(error);
}) .finally(()=>console.log('finally'));


/* then se usara para motrar lo que ocurre con el resolve 
y eñ catch se usara para mostrar lo que ocurre con el reject
y finaaly muestra que ya termino la promesa  */