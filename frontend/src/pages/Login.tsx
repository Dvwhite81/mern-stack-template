import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import authService from '../services/authService';
import { AuthResult, UserType } from '../utils/types';
import FormInput from '../components/FormInput';

interface LoginProps {
  setLoggedInUser: (user: UserType) => void
}

const Login = ({ setLoggedInUser }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    console.log('handleLogin');

    const result: AuthResult | undefined = await authService.login(
      username,
      password
    );

    if (result) {
      const { user, token } = result;
      setLoggedInUser(user);
      localStorage.setItem('token', token);
      navigate('/');
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    handleLogin(username, password);
  };

  return (
    <Container fluid>
      <h2>Login</h2>
      <Form className='user-form' onSubmit={handleSubmit}>
        <FormInput
          label='Username'
          type='text'
          value={username}
          setValue={setUsername}
        />
        <FormInput
          label='Password'
          type='password'
          value={password}
          setValue={setPassword}
        />
        <Button type='submit'>Log In</Button>
      </Form>
      <p className='text-center'>
        Don't have an account? <Link to='/register'>Sign up</Link>
      </p>
    </Container>
  );
};

export default Login;
