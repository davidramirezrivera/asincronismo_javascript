//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw#resumen
export async function runCode() {
    const url = 'https://domain-api-com';
    try {
      await fetch(url)
    } catch (error) {
      throw new Error('API Not Found');
    }
}
