//instalar node fetch desde la consola con el comando npm node fetch
import fetch from "node-fetch"; // importar el fetch que es la herramienta a usar para trabajar con peticiones en http de forma asincrona 
const API = 'http://api.escuelajs.co/api/v1';  //el link con el que vamos a trabajar y del cual se extraera los datos 

function fetchData(urlApi){ //funcion que nos permitira usar el link anterior mente declarado en el proyecto
    return fetch(urlApi);
} // USADA PARA RECIBIR DATOS 


/* fetchData(`${API}/products`) //valor que se hallamado
.then(response => response.json()) // transformar la inforcacion  traida en response a un formato json
.then(products => {
    console.log(products);
})
.then(()=>{
    console.log('hola');
})
.catch(error => console.log (error));
// aunque no se usa el new promise si se aplica ya que el fetch por si mismo es una promesa  */

fetchData(`${API}/products`) 
.then(response => response.json())
.then(products => {
    return fetchData(`${API}/products/${products[0].id}`) // es usado para traer un elemento especifico dentro de los productos 
})
.then(response => response.json())
.then(products => {
    console.log(products.name)
    return fetchData(`${API}/categories/${products.category.id}`)
})
.then(response => response.json()) // transformar la inforcacion  traida en response a un formato json
.then(category => {
    console.log(category.name);// muestra solo la categoria del elemento 
})
.catch(err => console.log (err))
.finally(() => console.log ('finally'))