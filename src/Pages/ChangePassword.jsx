import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ChangePassword() {

  return <>
    <div className='pt-5'>
      <h1 className='text-center display-6'>Change Password</h1>

      <Row>
        <Col className='offset-4 col-4'>
          <Form className='pt-5'>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Current Password
                <span class="mandatory">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Enter Current Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                New Password
                <span class="mandatory">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Enter New Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Save New Password</Button>
            <Button variant='link' type='link'>Cancel</Button>

          </Form>
        </Col>
      </Row>
    </div>
  </>;
}

export default ChangePassword;