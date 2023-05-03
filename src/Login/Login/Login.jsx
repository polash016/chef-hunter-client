import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase.config';

const Login = () => {
const auth = getAuth(app)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    const handleGithubLogin = () => {
        const githubProvider = new GithubAuthProvider()
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user)
        })
        .then(error => {
            console.log(error)
        })
    }
    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
        })
        .then(error => {
            console.log(error)
        })
    }
    return (
        <Container className="w-25">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <div className='mt-4'>
        <Button onClick={handleGoogleLogin} className='me-4' variant="secondary" type="submit">
          Google Login
        </Button>
        <Button onClick={handleGithubLogin} variant="secondary" type="submit">
          Github Login
        </Button>
        </div>
        <br />
        <Form.Text className="text-muted">
           Don't Have An Account? <Link to='/register'>Register</Link>
          </Form.Text>
        <Form.Text className="text-danger">
            
          </Form.Text>
          <Form.Text className="text-success">
            
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Login;