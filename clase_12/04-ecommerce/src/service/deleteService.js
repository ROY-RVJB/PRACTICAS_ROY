import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

const eliminarComercio = async (id) => {
  try {
    const respuesta = await axios.delete(`${URL}/comercio/${id}`);
    console.log('Comercio eliminado:', respuesta.data);
    
    if (respuesta.status === 200 || respuesta.status === 204) {
      return respuesta.data;
    }
    throw new Error('Error al eliminar comercio');
  } catch (error) {
    console.error('Error en eliminarComercio:', error);
    throw error;
  }
};

export { eliminarComercio };