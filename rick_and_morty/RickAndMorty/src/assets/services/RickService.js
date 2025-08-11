import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character?page=1";
const obtenerPersonajes = async () =>{
    try {
        const respuesta= await axios.get(`${URL}`);
         return respuesta.data.results; 

    }catch (error) {
        console.error("Error al obtener los personajes:", error);
        throw error;
    }
}; 
export {obtenerPersonajes};