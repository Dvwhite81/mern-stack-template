import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import authService from '../services/authService';
import { AuthResult, UserType } from '../utils/types';
import FormInput from '../components/FormInput';

interface RegisterProps {
  setLoggedInUser: (user: UserType) => void
}

const Register = ({ setLoggedInUser }: RegisterProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (
    username: string,
    password: string,
    confirmation: string
  ) => {
    console.log('handleRegister');

    if (password !== confirmation) {
      console.log('passwords do not match');
    } else {
      const result: AuthResult | undefined = await authService.register(
        username,
        password
      );

      if (result) {
        const { user, token } = result;
        setLoggedInUser(user);
        localStorage.setItem('token', token);
        navigate('/');
      } else {
        console.log('no success');
      }
    }
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    handleRegister(username, password, confirmation);
  };

  return (
    <Container fluid>
      <h2>Sign Up</h2>
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
        <FormInput
          label='Confirm'
          type='password'
          value={confirmation}
          setValue={setConfirmation}
        />
        <Button type='submit'>Sign Up</Button>
      </Form>
      <p className='text-center'>
        Already have an account? <Link to='/login'>Log In</Link>
      </p>
    </Container>
  );
};

export default Register;
