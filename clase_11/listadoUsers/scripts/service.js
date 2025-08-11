import { obterner } from "../../../../Prueba/service";

const obtenerUsuario= async()=>{
    try {
        const respuesta= await fetch("https://reqres.in/api/users?page=2");z
    const datos = await respuesta.json();
    return datos;
    } catch (error) {
        console.log(error);
        throw error;
    }
    
};

export {obtenerUsuario};
obterner();