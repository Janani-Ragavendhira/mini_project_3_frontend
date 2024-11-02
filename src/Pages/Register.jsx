import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const goLogin = e => {
    e.preventDefault();
    navigate('/login');
  }

  return <>
    <div className='pt-5'>
      <h1 className='text-center display-6'>User Registration</h1>
      <Form className='pt-5'>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I agree to the terms and conditions of the traval agency's passengers rights and limitations. " />
        </Form.Group>

        <Button variant="primary" type="submit">Register</Button>
        <Button variant='link' type='button' onClick={goLogin}>Go to Login</Button>

      </Form>
    </div>
  </>;
}

export default Register;