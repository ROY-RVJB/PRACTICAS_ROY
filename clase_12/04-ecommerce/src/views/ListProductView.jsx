import { useEffect, useState } from 'react';
import { obtenerProductos } from '../service/productService';
import BasicExample from '../components/TableProductos';

const ListProductView = () => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    try {
      const data = await obtenerProductos();
      console.log('Productos obtenidos:', data);
      setProductos(data); // ✅ Aquí se actualiza el estado
    } catch (error) {
      console.error('Error al cargar productos:', error.message || error);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleProductoEliminado = () => {
    cargarProductos(); // Recargar la lista después de eliminar
  };

  return (
    <div className="container mt-4">
      <h2><i>Lista de productos</i></h2>
      <BasicExample productos={productos} onProductoEliminado={handleProductoEliminado} />
    </div>
  );
};

export default ListProductView;
