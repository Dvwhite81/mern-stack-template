import { useState } from 'react';
import { NavDropdown, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserType } from '../utils/types';
import DropdownMenu from './DropdownMenu';
import LogoutBtn from './LogoutBtn';

interface NavBarProps {
  loggedInUser: UserType | null
  handleLogout: () => void
}

const NavBar = ({ loggedInUser, handleLogout }: NavBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleVisibleClick = () => setIsVisible((prev) => !prev);

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <Navbar
      bg='dark'
      data-bs-theme='dark'
      className='h-100 mx-0 d-flex justify-content-around p-2 rounded'
    >
      {!loggedInUser ? (
        <>
          <Link to='/register'>Sign Up</Link>
          <Link to='/'>
            <img id="nav-logo" src="/recipes-logo.png" alt="main recipes logo" />
          </Link>
          <Link to='/login'>Log In</Link>
        </>
      ) : (
        <>
          <Link to='/'>Home</Link>
          <NavDropdown
            style={{ color: 'whitesmoke' }}
            title='Categories'
            onClick={handleVisibleClick}
          >
            {isVisible && (
              <DropdownMenu
                handleClick={handleVisibleClick}
              />
            )}
          </NavDropdown>
          <Link to='/profile'>Profile</Link>
          <LogoutBtn handleLogout={handleLogoutClick} />
        </>
      )}
    </Navbar>
  );
};

export default NavBar;
