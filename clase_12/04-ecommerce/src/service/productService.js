import axios from 'axios';

const URL=import.meta.env.VITE_ENDPOINT_BASE;

// Asumiendo que tu recurso se llama 'productos'

const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get(`${URL}/comercio`); 
      console.log(respuesta.data);
    // Opcional: validar estado
    if (respuesta.status === 200) {
      return respuesta.data;
     
    }
     throw new Error("Error al obtener data ");
  } catch (error) {
    throw error;
  }
};

const nuevoProducto = async (producto) => {
  try {
    const respuesta = await axios.post(`${URL}/comercio`, producto);
    console.log('Producto creado:', respuesta.data);
    
    if (respuesta.status === 201 || respuesta.status === 200) {
      return respuesta.data;
    }
    throw new Error('Error al crear producto');
  } catch (error) {
    console.error('Error en nuevoProducto:', error);
    throw error;
  }
}

export { obtenerProductos,
        nuevoProducto
 };
