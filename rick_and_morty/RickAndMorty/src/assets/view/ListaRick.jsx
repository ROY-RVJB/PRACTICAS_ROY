
import { useState,useEffect } from "react";
import { obtenerPersonajes } from "../services/RickService";
import TableRick from "../components/TableRick";

const ListaRick = () => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const cargarPersonajes = async () => {
            const data = await obtenerPersonajes();
            console.log("personajes obtenidos",data);
            setPersonajes(data);
        }
        cargarPersonajes();
    }, []);

return (
<TableRick personajes={personajes} />

);


}
export default ListaRick;