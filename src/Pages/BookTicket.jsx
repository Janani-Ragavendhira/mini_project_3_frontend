import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { Stack, Table } from 'react-bootstrap';
import { useContext } from 'react'
import { AuthContext } from '../ContextProviders/AuthContext';

function BookTicket() {

  const { user } = useContext(AuthContext);
  const seats = [];
  const seatsForRow = 5;

  for(let i=0; i<56; i++) {
    seats.push({
      seatNumber: i+1,
      isBooked: 0
    });
  }

  let rowedSeats = [];
  let lastRow = Math.ceil(seats.length / seatsForRow);

  for(let i = 0; i < lastRow; i++) {
    let start = i * seatsForRow;
    rowedSeats.push(seats.slice(start, start + seatsForRow));
  }

  if( rowedSeats[lastRow-1].length < seatsForRow ) {
    lastRow--;
    const lastRowSeats = rowedSeats.splice(lastRow, 1).shift(1);
    lastRowSeats.forEach(seat => {
      rowedSeats[lastRow-1].push(seat);
    });
  }

  return <>
    <div className='pt-5'>
      <h1 className='text-center display-6 mb-5'>Book Tickets</h1>

      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>From</Form.Label>
            <Form.Select placeholder="Choose From" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Destination</Form.Label>
            <Form.Select placeholder="Choose Destination" />
          </Form.Group>

          <Form.Group as={Col} sm="2" controlId="formGridPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Choose Travel Date" />
          </Form.Group>

          <Form.Group as={Col} sm="2" controlId="formGridPassword">
            <Form.Label>Passengers Count</Form.Label>
            <Form.Control type="password" placeholder="Enter Passengers Count" />
          </Form.Group>

          <Col sm="1">
            <Button className='adjust-top'>Filter</Button>
          </Col>

        </Row>  
      </Form>

      <h4>Choose Bus</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>From - To</th>
            <th>Depature</th>
            <th>Arrival (Approx.)</th>
            <th>Availability</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chennai - Madurai</td>
            <td>29 Oct 2024 10:00 PM</td>
            <td>30 Oct 2024 05:00 AM</td>
            <td>5</td>
            <td>
              <Button type='button'>Book</Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className='my-3'>
        <h4>Choose the seat(s)</h4>
        <Row>
          { rowedSeats.map((row, i) =>
            <Col key={i}>
              <Stack direction='vertical' gap={1}>
                {row.map((seat, j) => {
                  if( j == 3 && (i != rowedSeats.length - 1) ) 
                    return <Button key={seat.seatNumber} variant='seat' className='walk-space seat' disabled>{seat.seatNumber}</Button>;
                  return <Button key={seat.seatNumber}  variant='seat' className={ seat.seatNumber == 3 ? "active" : "" } >{seat.seatNumber}</Button>
                })}
              </Stack>
            </Col>
          )}
        </Row>
      </div>

      <div className='my-4 text-center'>
          <Button className='btn-lg'>Confirm the Book</Button>
      </div>
    </div>
  </>;
}

export default BookTicket;