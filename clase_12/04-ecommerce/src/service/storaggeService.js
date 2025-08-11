import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/connectfb";
import { nameFILEUUID } from "../utils/utils";

const uploadFile = async(imagen) => {
    try {
        // Generar nombre único usando UUID
        const uniqueFileName = nameFILEUUID(imagen.name);
        const refArchivo = ref(storage, `productos/${uniqueFileName}`);
        
        const resultado = await uploadBytes(refArchivo, imagen);
        console.log('Resultado upload:', resultado);
        
        // Obtener la URL de descarga
        const downloadURL = await getDownloadURL(resultado.ref);
        console.log('URL de la imagen:', downloadURL);
        
        return downloadURL;
    } catch (error) {
        console.log('Error en uploadFile:', error);
        throw error;
    }
}

export { uploadFile }