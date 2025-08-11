import Table from 'react-bootstrap/Table';

function TableRick({personajes=[]}) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombres</th>
          <th>Estado</th>
          <th>Especie</th>
        </tr>
      </thead>
      <tbody>
        {
            personajes.map((personajes)=>(
                <tr key={personajes.id}>
                    <td>{personajes.id}</td>
                    <td>{personajes.name}</td>
                    <td>{personajes.status}</td>
                    <td>{personajes.species}</td>
                </tr>
            ))
        }
        
      </tbody>
    </Table>
  );
}

export default TableRick;