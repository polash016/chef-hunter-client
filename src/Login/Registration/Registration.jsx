import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Registration = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false)
    const {register} = useContext(AuthContext)
    const handleRegistration = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
        .then(result => {
            const registeredUser = result.user
            console.log(registeredUser)
            setError('')
            form.reset()
            setSuccess('User Created Successfully')
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
            setSuccess('')
        })
        form.reset()
        

    }
    const handleAccept = event => {
        setAccepted(event.target.checked)
    }
    return (
        <Container className="w-25">
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccept}
            type="checkbox"
            name="accept"
            label="Accept Terms & Conditions"
          />
        </Form.Group>
        <Form.Text className="text-danger">{success}</Form.Text>
        <Form.Text className="text-success">{error}</Form.Text> <br />
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-muted">
          Already Have An Account? <Link to="/login">Login</Link>
        </Form.Text>
       
      </Form>
    </Container>
    );
};

export default Registration;