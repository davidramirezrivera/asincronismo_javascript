//instalar node fetch desde la consola con el comando npm node fetch
import fetch from "node-fetch"; // importar el fetch que es la herramienta a usar para trabajar con peticiones en http de forma asincrona 
const API = 'http://api.escuelajs.co/api/v1';  //el link con el que vamos a trabajar y del cual se extraera los datos 

function postData(urlApi, data){
    const response = fetch(urlApi,{
        //GET es obtener datos 
        //PUT es actualizar datos 
        //DELETE es para borrar datos 
        //POST es para enviara datos 
        method: 'POST',
        node: 'corse', //cors es el permiso que va a tener, por defecto va estar siempre en cors
         // https://developer.mozilla.org/en-US/docs/Glossary/CORS es la explicacion de que es 
        credentials: 'same-origin', // si no hay autenticacion no pasa nada
        headers:{
            'Content-Type': 'application/json' //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data)
        //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}
//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    "title": "Nintendo 3DS",
    "price": 300,
    "description": "consola de juegos fabricada por la compañia de nintendo",
    "categoryId": 5,
    "images": ["https://images.pexels.com/photos/3702458/pexels-photo-3702458.jpeg?cs=srgb&dl=pexels-mike-esparza-3702458.jpg&fm=jpg"]
}
//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola
postData(`${API}/products`,data)
.then(response => response.json())
.then(data =>console.log(data))