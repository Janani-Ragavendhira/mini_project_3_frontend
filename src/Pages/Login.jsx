import { useState, useContext } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../ContextProviders/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log('Hi');
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/login', { email, password });
      // login(response.data.token);
      login('Ragav');
      setMessage('Login successful');
      console.log('Hi I am ');
      navigate('/bookTicket');
    } catch (error) {
      setMessage('Invalid credentials');
    }
  };

  const goRegister = e => {
    e.preventDefault();
    navigate('/register');
  }

  return <>
    <div className='pt-5'>
      <h1 className='text-center display-6'>User Login</h1>

      <Row>
        <Col className='offset-4 col-4'>
          <Form className='pt-5'>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email address
                <span className="mandatory">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password
                <span className="mandatory">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>Login</Button>
            <Button variant='link' type='link' onClick={goRegister}>Go to Register</Button>

          </Form>
        </Col>
      </Row>
    </div>
  </>;
}

export default Login;