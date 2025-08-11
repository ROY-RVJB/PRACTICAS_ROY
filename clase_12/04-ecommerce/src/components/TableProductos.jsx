import Table from 'react-bootstrap/Table';
import CircleColor from './CircleColor';
function BasicExample({productos=[]}) {
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
            </tr>
        ))}
      </tbody>
    </Table>    
  );
}

export default BasicExample;