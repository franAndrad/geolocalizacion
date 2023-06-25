import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function FormUbicacion() {
  return (
      <div className='border rounded p-4 h-100'>
        <h2 className='my-4 text-center'>Formulario Ubicacion</h2>
        <Form>
          <Form.Group  className="mb-3" controlId="celular">
            <Form.Label column sm="2">
              Celular
            </Form.Label>
            <Col sm="10">
              <Form.Control type='number' placeholder="3884216529" />
            </Col>
          </Form.Group>  
          <Form.Group  className="mb-3" controlId="direccion">
            <Form.Label column sm="2">
              Calle
            </Form.Label>
            <Col sm="10">
              <Form.Control type='text' placeholder="Direccion" />
            </Col>
          </Form.Group>  
          <Form.Group  className="mb-3" controlId="descripcion">
            <Form.Label column sm="2">
              Descripcion
            </Form.Label>
            <Col sm="10">
              <Form.Control  type='text' placeholder="Departamento, piso, color de porton" />
            </Col>
          </Form.Group>
        </Form>
          </div>
  );
}

export default FormUbicacion;
