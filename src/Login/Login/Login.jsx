import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../../firebase.config";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
  const { googleLogin, githubLogin, passwordLogin } =
    useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    passwordLogin(email, password)
    .then(result => {
        console.log(result)
        setSuccess('Login Successfull')
        setError('')
    })

    form.reset()
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        setError('')
      })
      .then((error) => {
        console.log(error);
        setError(error.message)
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setError('')
      })
      .then((error) => {
        console.log(error);
        setError(error.message)
      });
  };
  return (
    <Container className="w-25">
      <Form onSubmit={handleLogin}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
      </Form>
      <div className="mt-4">
        <Button
          onClick={handleGoogleLogin}
          className="me-4"
          variant="secondary"
          type="submit"
        >
          Google Login
        </Button>
        <Button onClick={handleGithubLogin} variant="secondary" type="submit">
          Github Login
        </Button>
      </div>
      <br />
      <Form.Text className="text-muted">
        Don't Have An Account? <Link to="/register">Register</Link>
      </Form.Text>
      <Form.Text className="text-danger"></Form.Text>
      <Form.Text className="text-success"></Form.Text>
    </Container>
  );
};

export default Login;
