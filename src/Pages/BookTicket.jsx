import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

function BookTicket() {

  return <>
    <div className='pt-5'>
      <h1 className='text-center display-6 mb-5'>Book Tickets</h1>

      <Form>
        
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Reserved Date</th>
            <th>Travel Date</th>
            <th>From</th>
            <th>To</th>
            <th>Total Passengars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </>;
}

export default BookTicket;