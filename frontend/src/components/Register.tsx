import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { AuthResult, UserType } from '../types';

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type='password'
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type='password'
        value={confirmation}
        onChange={({ target }) => setConfirmation(target.value)}
      />
      <input type='submit' value='Sign Up' />
    </form>
  );
};

export default Register;
