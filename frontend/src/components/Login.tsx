import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { AuthResult, UserType } from '../types';

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <input type="submit" value="Log In" />
    </form>
  );
};

export default Login;
