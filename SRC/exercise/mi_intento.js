export async function runCode() { /// recordadr colocar en la fucnion el async
    const url = 'https://domain-api-com';
    //const llamado = async (urlApi) => {
      try {
        const resp = await fetch(urlApi)
      } catch (error) {
        console.log("API NO FOUND");
      }
    //}
}


export async function runCode() {  
    const url = 'https://domain-api-com'; // se llama la api
    try {
        const resp = await fetch(urlApi) // recibe la informacion de la api 
    } catch (error) { // detecta el error 
        console.log("API NO FOUND");
    }
}