export async function runCode(url) { // funcion asincronica
    try {
     new URL(url); // esta opcion nos permite verificar de manera facil si la url es valida
     const response = await fetch(url); //obtener los datos de dicha url API
     return response.json(); // retorna los datos obtenidos en formato jason 
    } catch(error) {
      if (error.message === "Failed to construct 'URL': Invalid URL"){ // con este condicional determinamos si el error es que la url sea incorrecta 
        throw new Error('Invalid URL');
      } else { // que lo escrito no sea una url
        throw new Error('API Not Found');
      }
    }
  }