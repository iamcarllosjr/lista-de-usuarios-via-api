//FETCH API
//BUSCANDO REQUISIÇÃO PELO LINK API
//POR PADRÃO O METODO DE TODA API É GET, PU SEJA, MOSTRAR, BUSCAR, DADOS.
const apiData = async () => {
    const data = await fetch("https://randomuser.me/api/?results=6");

    if (!data.ok) {
        throw new Error("Failed to fetch data")
    }
    
    return data.json();
}
export default apiData;