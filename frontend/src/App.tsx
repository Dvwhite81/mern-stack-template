import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { UserType } from './utils/types';
import { CATEGORIES } from './utils/helpers';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './App.css';
import Notification from './components/Notification';

function App() {
  const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleLogout = () => {
    console.log('handleLogout');
    setLoggedInUser(null);
    localStorage.removeItem('token');
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
        <Route path='/' element={<Home />} />
        {loggedInUser ? (
          <Route
            path='/profile'
            element={<Profile loggedInUser={loggedInUser} />}
          />
        ) : (
          <>
            <Route
              path='/register'
              element={<Register setLoggedInUser={setLoggedInUser} />}
            />
            <Route
              path='/login'
              element={<Login setLoggedInUser={setLoggedInUser} />}
            />
          </>
        )}
      </Routes>
    </Container>
  );
}

export default App;
