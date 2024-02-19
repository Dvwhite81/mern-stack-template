import axios from 'axios';
const baseUrl = 'http://localhost:7000/recipes';

let token: string | null = null;

const setToken = (newToken: string) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log('recipeService getAll response:', response);
  return response.data;
};

const create = async (newObject: object) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (id: string, newObject: object) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const remove = async (id: string, userToken: string) => {
  setToken(userToken);

  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default { create, getAll, remove, setToken, update };
