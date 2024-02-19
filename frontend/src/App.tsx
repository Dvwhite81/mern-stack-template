import { SyntheticEvent, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { getRecipes } from './services/recipeService';
import { Recipe, UserType } from './utils/types';
import { CATEGORIES } from './utils/helpers';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Notification from './components/Notification';
import Profile from './pages/Profile';
import Register from './pages/Register';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);
  const [query, setQuery] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [saved, setSaved] = useState<Recipe[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const handleLogout = () => {
    console.log('handleLogout');
    setLoggedInUser(null);
    localStorage.removeItem('token');
    setMessage('Logged Out!');
  };

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const results = await getRecipes(query);
    setRecipes(results);
    setQuery('');
  };

  return (
    <Container fluid>
      <NavBar
        categories={CATEGORIES}
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
      />
      <Notification message={message} setMessage={setMessage} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              query={query}
              setQuery={setQuery}
              handleSubmit={handleSearchSubmit}
              recipes={recipes}
              saved={saved}
              setSaved={setSaved}
              loggedInUser={loggedInUser}
              setMessage={setMessage}
            />
          }
        />
        {loggedInUser ? (
          <Route
            path='/profile'
            element={<Profile loggedInUser={loggedInUser} />}
          />
        ) : (
          <>
            <Route
              path='/register'
              element={
                <Register
                  setLoggedInUser={setLoggedInUser}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path='/login'
              element={
                <Login
                  setLoggedInUser={setLoggedInUser}
                  setMessage={setMessage}
                />
              }
            />
          </>
        )}
      </Routes>
    </Container>
  );
}

export default App;
