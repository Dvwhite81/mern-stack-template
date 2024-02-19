import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserType } from './types';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Home from './components/Home';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);

  const handleLogout = () => {
    console.log('handleLogout');
    setLoggedInUser(null);
    localStorage.removeItem('token');
  };


  return (
    <BrowserRouter>
      <NavBar loggedInUser={loggedInUser} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />
        {loggedInUser ? (
          <Route path='/user/:userId' element={<Profile loggedInUser={loggedInUser} />} />
        ) : (
          <>
            <Route path='/register' element={<Register setLoggedInUser={setLoggedInUser} />} />
            <Route
              path='/login'
              element={<Login setLoggedInUser={setLoggedInUser} />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
