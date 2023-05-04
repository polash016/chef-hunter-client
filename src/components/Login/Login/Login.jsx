/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
  const { googleLogin, githubLogin, passwordLogin } =
    useContext(AuthContext);
    const from = location.state?.from?.pathname || '/'

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess('')
    setError('')
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    passwordLogin(email, password)
    .then(result => {
        console.log(result)
        setSuccess('Login Successfull')
        setError('')
        navigate(from, {replace: true})
    })
    .then(error => {
        setError(error?.message)
    })

    form.reset()
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        setError('')
        navigate(from, {replace: true})
      })
      .then((error) => {
        setError(error?.message)
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setError('')
        navigate(from, {replace: true})
      })
      .then((error) => {
        setError(error?.message)
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
      <Form.Text className="text-danger">{success}</Form.Text>
      <Form.Text className="text-success">{error}</Form.Text>
    </Container>
  );
};

export default Login;
