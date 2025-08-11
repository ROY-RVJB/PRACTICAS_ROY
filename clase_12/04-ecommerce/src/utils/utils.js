import { v4 as uuidv4 } from 'uuid';

const nameFILEUUID = (nombreArchivo) => {
    const arraNombreArchivo = nombreArchivo.split(".");
    const extension = arraNombreArchivo[arraNombreArchivo.length - 1];
    const newUUID = uuidv4();
    const newName = `${newUUID}.${extension}`;
    return newName;
}

export { nameFILEUUID };