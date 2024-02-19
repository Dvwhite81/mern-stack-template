import axios from 'axios';

const login = async (username: string, password: string) => {
  console.log('auth login');
  const user = { username, password };

  const { data } = await axios.post('http://localhost:7000/login', user);

  if (data.success) {
    return {
      success: true,
      user: data.user,
      token: data.token,
    };
  }
};

const register = async (username: string, password: string) => {
  console.log('auth register');
  const user = { username, password };

  const { data } = await axios.post('http://localhost:7000/register', user);

  if (data.success) {
    return {
      success: true,
      user: data.user,
      token: data.token,
    };
  }
};

export default {
  login,
  register,
};
