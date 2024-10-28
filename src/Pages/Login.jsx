import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

  return <>
    <div className='pt-5'>
      <h1 className='text-center display-6'>User Login</h1>

      <Row>
        <Col className='offset-4 col-4'>
          <Form className='pt-5'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email address
                <span class="mandatory">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password
                <span class="mandatory">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button>
            <Button variant='link' type='link'>Go to Register</Button>

          </Form>
        </Col>
      </Row>
    </div>
  </>;
}

export default Login;