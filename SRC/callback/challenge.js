const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // se llama al archvivo creado por el comando npm i xmlhttprequest
const API = "https://api.escuelajs.co/api/v1"; // se llama la api para sea usada
function fetchData(urlApi,callback){ // funcion para hacer peticiones a una API // callback seria la informacion que recibimos 
     let xhttp = new XMLHttpRequest(); // es un llamado de XMLHttpRequest

     xhttp.open ('GET', urlApi, true); //se abre una conexion con la api, el get se refiere al tipo de peticion
     xhttp.onreadystatechange = function(event){ //escucha los estados que tiene la solicitud para saber cuando esta lista
        if (xhttp.readyState === 4){ //validacion del estado de la solicitud 
            //0 es que no se ha inicializado
            //1 esta cargano
            //2 se ha cargado
            //3 interactuando con la solicitud viendo si hay una descarga 
            //4 se ha completado
            if(xhttp.status === 200){
                //200 ok
                //201 created
                //204 no contend
                //https://developer.mozilla.org/es/docs/Web/HTTP/Status 
                //para ver mas significados de los estados a las solicitudes
                callback(null,JSON.parse(xhttp.responseText)); // JSON parse es para convertir un texto en un objeto
            }else{
                const error = new Error ('error' + urlApi);
                return callback(error,null); // el nuelo es por que no esta regesando ningun dato
            }
        }
     }
     xhttp.send();
}

fetchData(`${API}/products`, function(error1,data1){
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[198].id}`,function (error2,data2){
        if (error2) return console.log(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`,function(error3,data3){
            if(error3) return console.error(error3);
            console.log(data1[198]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})



///para usar el codigo desde la terminal se aplicara el siguiente comando
// node SRC/callback/challenge.js
//tambien se puede modificart el package.json para que el comando para correr el codigo en consola sea 
//npm run callback