import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CircleColor from './CircleColor';
import { eliminarComercio } from '../service/deleteService';
import Swal from 'sweetalert2';

function BasicExample({productos=[], onProductoEliminado}) {
  
  const handleEliminar = async (id, nombre) => {
    try {
      const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: `¿Deseas eliminar el producto "${nombre}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      });

      if (result.isConfirmed) {
        await eliminarComercio(id);
        Swal.fire(
          'Eliminado',
          `El producto "${nombre}" ha sido eliminado.`,
          'success'
        );
        if (onProductoEliminado) {
          onProductoEliminado();
        }
      }
    } catch (error) {
      Swal.fire(
        'Error',
        'No se pudo eliminar el producto',
        'error'
      );
    }
  };
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>nombre</th>
          <th>descripcion</th>
          <th>marca</th>
          <th>precio</th>
          <th>color</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
            <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.marca}</td>
                <td>{producto.precio}</td>
                <td><CircleColor color={`#${producto.color}`} /></td>
                <td>
                  <Button 
                    variant="danger" 
                    size="sm"
                    onClick={() => handleEliminar(producto.id, producto.nombre)}
                  >
                    Eliminar
                  </Button>
                </td>
            </tr>
        ))}
      </tbody>
    </Table>    
  );
}

export default BasicExample;