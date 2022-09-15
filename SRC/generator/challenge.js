
import fetch from "node-fetch"; 
const API = 'http://api.escuelajs.co/api/v1';  

async function* fetchData(urlApi){
    const response = await fetch(urlApi);
    yield await response.json();
    return data;
}
async function datos(urlApi) {

    try {
        const products = fetchData(`${urlApi}/products/`);
        console.log(await products.next());
        return products;
    } catch (error) {
        console.error(error);
    }

}

const pro = datos (API);

